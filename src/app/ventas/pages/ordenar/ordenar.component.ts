import { Component } from '@angular/core';
import { Color, Heroe } from '../../Interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  bMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[ ] = [
    {
    Nombre: 'Superman',
    vuela: true,
    color: Color.azul
    },
    {
      Nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
        Nombre: 'Robin',
        vuela: false,
        color: Color.verde
    },
    {
      Nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    { 
      Nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
      }
  ]
  cambiar(){
    this.bMayusculas = !this.bMayusculas;
  }

  cambiarOrden(valor : string){
    this.ordenarPor = valor;
    
  }
}
