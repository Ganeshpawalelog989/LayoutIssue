import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientdetailsComponent } from './components/patientdetails/patientdetails.component';
import { AuthGuard } from './helper/auth.guard';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { LayoutComponent } from './Layout/layout/layout.component';
//import { TopnavComponent } from './Layout/topnav/topnav.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('src/app/Layout/layout/layout.module').then(m => m.LayoutModule),
  // }
  {
    path : 'layout' , component : LayoutComponent
  },
  {
    path : 'dashboard' , component : DashboardComponent
  },
  {
    path : 'patientdetails' , component : PatientdetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
