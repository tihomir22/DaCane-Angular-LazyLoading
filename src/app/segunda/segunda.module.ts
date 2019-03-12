import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';
import { IntroComponent } from './intro/intro.component';
import { ContenidoAlbumComponent } from './contenido-album/contenido-album.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent
  }
];

@NgModule({
  declarations: [ContenidoComponent, IntroComponent, ContenidoAlbumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
  /*
  exports:[
    ContenidoComponent
  ]*/
})
export class SegundaModule{ }
