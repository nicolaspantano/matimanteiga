import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoAltaComponent } from './pedidos/pedido-alta/pedido-alta.component';
import { PedidosListadoComponent } from './pedidos/pedidos-listado/pedidos-listado.component';
import { ProductoAltaComponent } from './productos/producto-alta/producto-alta.component';
import { ProductosListadoComponent } from './productos/productos-listado/productos-listado.component';
import { ZonaAltaComponent } from './zonas/zona-alta/zona-alta.component';
import { ZonasListadoComponent } from './zonas/zonas-listado/zonas-listado.component';

const routes: Routes = [
  {path:'',redirectTo:'pedidos-listado',pathMatch:'full'},
  {path:'pedidos-listado',component:PedidosListadoComponent},
  {path:'pedidos-alta',component:PedidoAltaComponent},
  {path:'zonas-listado',component:ZonasListadoComponent},
  {path:'zonas-alta',component:ZonaAltaComponent},
  {path:'productos-listado',component:ProductosListadoComponent},
  {path:'productos-alta',component:ProductoAltaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
