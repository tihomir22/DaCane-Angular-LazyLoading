import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoComponent } from './segunda/contenido/contenido.component';
import { ContenidoprimeraComponent } from './primera/contenidoprimera/contenidoprimera.component';
import { NotfoundComponent } from './notfound/notfound.component';


//{ path: 'lazymodule', loadChildren: './lazymodule/lazymodule.module#LazyModuleModule' }

const appRoutes: Routes = [
  //{ path: 'segunda3', component: ContenidoComponent },
  { path: 'segunda', loadChildren: './segunda/segunda.module#SegundaModule' },
  { path: '', component: ContenidoprimeraComponent },
  

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
