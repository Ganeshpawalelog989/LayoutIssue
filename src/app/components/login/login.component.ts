  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loading = false;
    submitted = false;

  constructor(private fb: FormBuilder,
     private service : UserService,
     private router : Router,
     private route : ActivatedRoute) {
  }
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
}


  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  // onLogin() {
  //   if (!this.loginForm.valid) {
  //     return;
  //   }
  //   console.log(this.loginForm.value);

  //   this.service.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value)
  //   .subscribe({
  //     next : () => {
  //       const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //                   this.router.navigateByUrl(returnUrl);
  //     },
  //     error: any => {
  //       this.loading = false;
  //   }
  //   })

  // }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
   // debugger;
      // reset alerts on submit
     // this.alertService.clear();
     console.log("Inside the On submit");
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      console.log(this.loginForm.value);
      this.loading = true;
      this.service.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(data=>{
                this.router.navigate(['/register']);
              },
              error => {
                 // this.alertService.error(error);
                 this.router.navigate(['/login']);
                  this.loading = false;
              });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
}

}
