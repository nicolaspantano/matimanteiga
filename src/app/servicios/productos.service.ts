import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private firestore: AngularFirestore) { }

  AgregarUno(producto) {
    var id = this.firestore.createId();
    producto.id = id;
    this.firestore.collection('productos').doc(id).set({ ...producto });

  }

  TraerTodos() {
    return this.firestore.collection('productos').valueChanges();
  }

  Editar(producto){

  }

  Eliminar(id){
    
  }

}