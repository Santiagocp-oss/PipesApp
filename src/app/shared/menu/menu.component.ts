import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  
  items: MenuItem[] = [];
  constructor(){}

  ngOnInit(): void{ 
    this.items = [
      {
        label:'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/                      '
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'no Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label:'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
  ];
}


  }
  

