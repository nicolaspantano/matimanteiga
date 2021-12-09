import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HojaProduccionService {

  constructor(private firestore:AngularFirestore) { }

  AgregarUno(prod){
    var fecha= new Date();
    var fechaStr = (fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear());
    
    this.firestore.collection('produccion').add({'fecha' : fechaStr, 'producto' : prod})
    
  }
  TraerTodos(){

  }

  TraerTodosPorFecha(fecha){
    return this.firestore.collection('produccion', (ref) =>
      ref.where('fecha', '==', fecha)
    );
  }
}
