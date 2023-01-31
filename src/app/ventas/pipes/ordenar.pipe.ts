import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../Interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( valor: Heroe[], orderPor: string = 'sin valor'): Heroe[] {

    switch (orderPor) {
      case 'Nombre':
      return valor.sort((a,b)=>(a.Nombre >b.Nombre) ? 1: -1);
      

      case 'vuela':
      return valor.sort((a,b)=>(a.vuela >b.vuela) ? -1: 1);
      

      case 'color':
      return valor.sort((a,b)=>(a.color >b.color) ? 1: -1);
    
      default:
        return valor;
    }

    // if (orderPor === 'sin valor') {
    //   return heroes;
    // }else{
      
    //   heroes = heroes.sort((a,b)=>(a.Nombre >b.Nombre) ? 1: -1);
      
    // }
    

    // return heroes;
  }

}
