import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumboInicioComponent } from './jumbo-inicio/jumbo-inicio.component';
import { FooterComponent } from './footer/footer.component';
import { CardsPrecioComponent } from './cards-precio/cards-precio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboInicioComponent,
    FooterComponent,
    CardsPrecioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
