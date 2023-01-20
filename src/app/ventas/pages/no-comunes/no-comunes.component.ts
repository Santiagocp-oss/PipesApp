import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre : string = 'fernando'
  genero: string = 'masculino'

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  clientes : string [] = ['Mario', 'patricia', 'andres', 'hernando  '];

  ClientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'no tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  CambiarCliente(){
    this.nombre='melisa'
    this.genero= 'femenino'
  }

  BorrarCliente(){
    this.clientes.pop();
  }

  //keyvalue Pipe
  persona ={
    nombre : 'Fernando',
    edad : 35,
    direccion : 'Ottawa, Canadá'

  }

  //json Pipe
  heroes =[
  {
    nombre: 'superman',
    vuela: true
  },
  {
    nombre: 'Robbin',
    vuela: false
  },
  {
    nombre: 'Acuaman',
    vuela: false
  }]

  // Async Pipe
  miObservable = interval(2000);
  

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve ( 'Tenemos data de promesa');
    }, 3500);
  }); 
}
