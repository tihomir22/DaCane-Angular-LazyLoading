import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoprimeraComponent } from './contenidoprimera/contenidoprimera.component';
import { CardsPrecioComponent } from '../primera/cards-precio/cards-precio.component';
import { CarouselComponent } from '../primera/carousel/carousel.component';


@NgModule({
  declarations: [
    ContenidoprimeraComponent,
    CardsPrecioComponent,
    CarouselComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContenidoprimeraComponent
  ]

})
export class PrimeraModule { }
