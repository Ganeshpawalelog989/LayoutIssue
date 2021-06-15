import { CommonModule } from '@angular/common';
import { NgModule ,  } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/Material.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
//import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
imports: [
  CommonModule,
  LayoutRoutingModule,
  MaterialModule,
  TranslateModule,
  //HttpClientModule,
 // HttpClient
  ],
declarations: [
  LayoutComponent,
  TopnavComponent,
  SidebarComponent
  
]
})
export class LayoutModule { }
