import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceraRoutingModule } from './tercera-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    TerceraRoutingModule
  ]
})
export class TerceraModule { }
