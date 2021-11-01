import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosListadoComponent } from './pedidos/pedidos-listado/pedidos-listado.component';
import { PedidoAltaComponent } from './pedidos/pedido-alta/pedido-alta.component';
import { ProductoAltaComponent } from './productos/producto-alta/producto-alta.component';
import { ProductosListadoComponent } from './productos/productos-listado/productos-listado.component';
import { ZonaAltaComponent } from './zonas/zona-alta/zona-alta.component';
import { ZonasListadoComponent } from './zonas/zonas-listado/zonas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosListadoComponent,
    PedidoAltaComponent,
    ProductoAltaComponent,
    ProductosListadoComponent,
    ZonaAltaComponent,
    ZonasListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
