import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MayusculasPipe } from './pipes/Mayusculas.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent  
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class VentasModule { }
