import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore:AngularFirestore) { }

  AgregarUno(cliente){
    this.comprobarSiExiste(cliente).subscribe((res)=>{
      if(res.length==0){
        this.firestore.collection('clientes').add({...cliente});

      }
    })
  }

  TraerTodos(){
    return this.firestore.collection('clientes').valueChanges();
  }

  comprobarSiExiste(cliente){
    return this.firestore.collection('clientes',(ref)=>ref.where('direccion','==',cliente.direccion)).valueChanges();
  }

}
