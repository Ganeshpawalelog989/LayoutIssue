import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from '.././app/components/login/login.module';
import {RegistrationModule} from '.././app/components/registration/registration.module';
//import { TopnavComponent } from './Layout/topnav/topnav.component';
import { PatientdetailsModule  } from './components/patientdetails/patientdetails.module'
//import { LayoutModule } from '@angular/cdk/layout';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
//import { HttpClient } from '@angular/common/http';
import { LayoutModule } from './Layout/layout/layout.module'


@NgModule({
  declarations: [
    AppComponent,
  //  TopnavComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegistrationModule,
    PatientdetailsModule,
    LayoutModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
