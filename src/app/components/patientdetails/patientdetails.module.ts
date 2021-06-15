import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientdetailsRoutingModule } from './patientdetails-routing.module';
import { PatientdetailsComponent } from './patientdetails.component';
import {  MatInputModule } from '@angular/material/input';
import {​​​ MatFormFieldModule }​​​ from"@angular/material/form-field";
import {​​​ FormsModule, ReactiveFormsModule }​​​ from'@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PatientdetailsComponent
  ],
  imports: [
    CommonModule,
    PatientdetailsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule        
  ]
})
export class PatientdetailsModule { }
