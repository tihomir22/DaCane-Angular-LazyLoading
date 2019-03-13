import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrimeraModule } from './primera/primera.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



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
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    PrimeraModule,
    //SegundaModule, se elimina ya que es lazy load 
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
