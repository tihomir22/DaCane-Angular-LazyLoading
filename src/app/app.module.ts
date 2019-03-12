import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ContenidoComponent} from './segunda/contenido/contenido.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrimeraModule } from './primera/primera.module';
import { SegundaModule } from './segunda/segunda.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PrimeraModule,
    //SegundaModule, se elimina ya que es lazy load 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
