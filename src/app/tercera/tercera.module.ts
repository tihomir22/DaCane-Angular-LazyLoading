import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceraRoutingModule } from './tercera-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnyadircardComponent } from './anyadircard/anyadircard.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, AnyadircardComponent, CardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TerceraRoutingModule
  ]
})
export class TerceraModule { }
