import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  genders = [
    "Male",
    "Female",
    "Other"
  ];

  Relation =[
    "Father",
    "Mother",
    "Other"
  ];

   option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  alergy=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ]

 
  onSubmitUserDetails(value: any){
    console.log(value);
  }
  
  patientDetails: FormGroup = this.formBuilder.group({
     FirstName :['',Validators.required ],
     LastName :['',Validators.minLength],
     DOB :[''],
     Age :[''],
     Gender:[''],
     Race:[''],
     Ethnicity:[''],
     Lanaguageknown :[''],
     Email :[''],
     HomeAddress :[''],
     ContantNo :['']
    });




}
