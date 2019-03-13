import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoprimeraComponent } from './primera/contenidoprimera/contenidoprimera.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
  { path: 'segunda', loadChildren: './segunda/segunda.module#SegundaModule' },
  { path: 'login', loadChildren: './tercera/tercera.module#TerceraModule' },
  { path: '', component: ContenidoprimeraComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
