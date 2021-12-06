import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.css']
})
export class ProductosListadoComponent implements OnInit {

  productos;
  constructor(private productosSvc:ProductosService) { }

  ngOnInit(): void {
    this.productosSvc.TraerTodos().subscribe(res => {
      this.productos=res;
      console.log(res);
    })
  }

}
