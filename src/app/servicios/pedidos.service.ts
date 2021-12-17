import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private firestore:AngularFirestore) { }

  AgregarUno(pedido){
    var id = this.firestore.createId();
    pedido.id = id;
    console.log('pedidoerror',pedido)
    this.firestore.collection('pedidos').doc(id).set({...pedido});
  }

  TraerTodos(){
    return this.firestore.collection('pedidos').valueChanges();
  }

  ActualizarEstado(id,estado){
    this.firestore.collection('pedidos').doc(id).update({'estado' : estado});
}

}