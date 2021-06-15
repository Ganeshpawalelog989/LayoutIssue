import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import {UserService} from '../../services/user.service';
import {Patient} from '../../models/patient';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {
  regiForm!: FormGroup;
  submitted = false;
  register: any;
  constructor(private formBuilder: FormBuilder, 
    private service:UserService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
      this.regiForm = this.formBuilder.group({

        firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
        
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          contact : ['',Validators.required],
          role: ['', Validators.required],
         Empid:['', Validators.required],
         dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
          password: [
            '',
            [
              Validators.required,
              Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
             ]
          ],

          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

 

  // convenience getter for easy access to form fields
  get f() { return this.regiForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.regiForm.invalid) {
          return;
      }

     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.regiForm.value))

      this.service.register(this.regiForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login']);
    },
    error=>{
      this.router.navigate(['/register'])
      console.log(error);
    })
  }

    
  onReset() {
    this.submitted = false;
    this.regiForm.reset();
}

  getAllData()
 {
  this.service.getAllPost().subscribe(data => {
    console.log("data get successfully");
    this.register=data;
    })
  }

  registeCom()
  {
    
  }
}


