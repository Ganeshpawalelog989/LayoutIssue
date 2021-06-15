import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import {MaterialModule } from 'src/app/Material.module'
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  //  MaterialModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
