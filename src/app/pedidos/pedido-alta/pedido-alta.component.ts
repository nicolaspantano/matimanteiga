import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ZonasService } from 'src/app/servicios/zonas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido-alta',
  templateUrl: './pedido-alta.component.html',
  styleUrls: ['./pedido-alta.component.css']
})
export class PedidoAltaComponent implements OnInit {

  zonas;
  zonaElegida;
  productosTodos;
  productosElegidos=[];

  pedido;
  constructor(private zonasSvc:ZonasService, private prodSvc:ProductosService, private pedidosSvc:PedidosService) { 
    this.pedido=new Pedido();
  }


  cargarTodo(){
    this.zonasSvc.TraerTodas().subscribe(res => {
      this.zonas=res;
      console.log(res);
    })

    this.prodSvc.TraerTodos().subscribe(res=>{
      this.productosTodos=res;
      console.log('prod', res)
    })
  }



  ngOnInit(): void {
    this.cargarTodo();
  }

  elegirZona(zona){
    (<NodeListOf<HTMLElement>>document.getElementsByName('zonas')).forEach(e => {
      e.style.backgroundColor='';
      e.style.color='black';
    });

    (<HTMLDListElement>document.getElementById(zona.nombre)).style.backgroundColor="#0d6efd";
    (<HTMLDListElement>document.getElementById(zona.nombre)).style.color="white";

    this.zonaElegida=zona.nombre;
    console.log(this.zonaElegida)

  }

  async agregarProducto(){

    var prodAElegir = this.generateJsonProductos();
    Swal.fire({
      title: 'Seleccione un producto',
      input: 'select',
      inputOptions : prodAElegir,
      inputPlaceholder: 'Seleccione un producto',
      
    }).then((res)=>{
      var prodElegido = prodAElegir[res.value];
      var i = this.productosTodos.findIndex(x => x.nombre == prodElegido);
      this.productosElegidos.push(this.productosTodos[i]);
      this.productosTodos.splice(i,1);
      console.log('todos',this.productosTodos);
      console.log('elegidos',this.productosElegidos);
    })


    
  }

  generateJsonProductos(){
    const ret = this.productosTodos.map(function(e){
      return e.nombre;
    });
    
    return ret;
  }

  agregarPedido(){
    this.pedido.zona = this.zonaElegida;
    this.pedido.productos = this.productosElegidos;
    this.pedido.estado = 0;
    Swal.fire({
      title : 'Pedido exitoso!',
      icon : 'success',
      confirmButtonText : 'Continuar'
    }).then(()=>{
      this.pedidosSvc.AgregarUno(this.pedido);
      this.pedido=new Pedido()
      this.zonaElegida = '';
      this.productosElegidos = [];
    
      this.cargarTodo();
    })
  }

}
