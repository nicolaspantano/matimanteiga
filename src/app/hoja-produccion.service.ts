import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HojaProduccionService {

  constructor(private firestore:AngularFirestore) { }

  AgregarUno(fecha, prod){
    console.log(prod);
    this.firestore.collection('produccion').add({'fecha' :fecha , 'producto' : prod})
    
  }
  TraerTodos(){

  }

  TraerTodosPorFecha(fecha){
    return this.firestore.collection('produccion', (ref) =>
      ref.where('fecha', '==', fecha)
    );
  }
}
