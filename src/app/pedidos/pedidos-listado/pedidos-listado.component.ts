import { Component, OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { ZonasService } from 'src/app/servicios/zonas.service';
import  dateFormat, { masks }  from 'dateformat';

@Component({
  selector: 'app-pedidos-listado',
  templateUrl: './pedidos-listado.component.html',
  styleUrls: ['./pedidos-listado.component.css']
})
export class PedidosListadoComponent implements OnInit {

  zonas;
  pedidos=[];
  mostrarEntregados=0;
  zonaElegida='default';
  pedidosActual=[];

  constructor(private zonaSvc : ZonasService, private pedidosSvc:PedidosService) { }

  ngOnInit(): void {

    
    this.zonaSvc.TraerTodas().subscribe(res => {
      this.zonas = res;
    })

    this.pedidosSvc.TraerTodos().subscribe(res => {
      this.pedidos = res;
      this.pedidosActual = this.pedidos.filter(p => p.estado==this.mostrarEntregados);
      this.pedidosActual.sort(function (a,b){

        var fechaUnoStr = a.fechaEntrega.split('/');
        var fechaUno = new Date(fechaUnoStr[2],fechaUnoStr[1]-1,fechaUnoStr[0]);

        var fechaDosStr = b.fechaEntrega.split('/');
        var fechaDos = new Date(fechaDosStr[2],fechaDosStr[1]-1,fechaDosStr[0]);

        if(fechaUno>fechaDos){
          return 1;
        }
        return -1;

        
      })
    })
  }

  cambiarZona(){
    this.pedidosActual = [];
    this.pedidos.forEach(element => {
      if(this.zonaElegida == element.zona && this.mostrarEntregados == element.estado){
        this.pedidosActual.push(element);
      }
    });
  }


  cambiarEstado(pedido,estado, index){
    this.pedidosSvc.ActualizarEstado(pedido,estado);
    this.pedidos[index].estado=estado;
  }

  imprimirNoEntregados(){
    const doc = new jsPDF();  


    doc.html(document.getElementById('pedidos').innerHTML, {
      callback: function (doc) {
        doc.save();
      },
      x: 10,
      y: 10
   });

  }


  cambiarEntregados(){
    this.mostrarEntregados = 1 - this.mostrarEntregados;
    this.pedidosActual = [];
    this.pedidos.forEach(element => {

      if(this.zonaElegida!='default'){
        if(this.zonaElegida == element.zona && this.mostrarEntregados == element.estado){
          this.pedidosActual.push(element);
        }
      }
      else{
        if(this.mostrarEntregados == element.estado){
          this.pedidosActual.push(element);
        }
      }
      
    });
  }

}
