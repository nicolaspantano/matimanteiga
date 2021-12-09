import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { ZonasService } from 'src/app/servicios/zonas.service';

@Component({
  selector: 'app-pedidos-listado',
  templateUrl: './pedidos-listado.component.html',
  styleUrls: ['./pedidos-listado.component.css']
})
export class PedidosListadoComponent implements OnInit {

  zonas;
  pedidos=[];

  zonaElegida='default';
  pedidosActual;
  constructor(private zonaSvc : ZonasService, private pedidosSvc:PedidosService) { }

  ngOnInit(): void {
    this.zonaSvc.TraerTodas().subscribe(res => {
      this.zonas = res;
    })

    this.pedidosSvc.TraerTodos().subscribe(res => {
      this.pedidos = res;
    })

    this.ImprimirNoEntregados();
  }

  cambiarZona(){
    this.pedidosActual = this.pedidos.filter(p => p.zona == this.zonaElegida);
  }


  cambiarEstado(pedido,estado, index){
    this.pedidosSvc.ActualizarEstado(pedido,estado);
    this.pedidos[index].estado=estado;
  }

  ImprimirNoEntregados(){
    /*const doc = new jsPDF();
    doc.addPage();
    doc.html(document.getElementById('pedidos'));
    doc.save('test.pdf');*/

  }
}
