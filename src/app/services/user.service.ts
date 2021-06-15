

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import { Patient } from '../models/patient';
import { map } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


 // baseUrl:string="http://localhost:3000/posts";

 private currentUserSubject: BehaviorSubject<Patient>;
 public currentUser: Observable<Patient>;
  constructor (private http: HttpClient) { 
     this.currentUserSubject = new BehaviorSubject<Patient>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Patient {
    return this.currentUserSubject.value;
    }

  getAllPost(): Observable<any>  {
   return this.http.get(`${environment.baseUrl}`)
  }

  login(email:string, password:string):Observable<any> {
    debugger;
    console.log("Inside the Service");
  //  let apiUrl  = `${environment.baseUrl}?`+"email="+email+"&"+"password="+password;
    // console.log("Api Url is here : ",apiUrl);
    console.log(email,password);
    return this.http.post<any>(`${environment.baseUrl}?`+"email="+email+"&"+"password="+password,{email,password})
        .pipe(map(user => {
          console.log(email,password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log("Inside the patient");
            return user;
        }));
    }
    register(posts : Patient) : Observable<any>
    {
      return this.http.post<any>(`${environment.baseUrl}`,posts);
    }

    update(patient : Patient) : Observable<any>
    {
      return this.http.post<any>(`${environment.baseUrl}?`+'id='+patient.Empid,patient);
    }

    deletePatient(id : number) : Observable<any>
  {
    return this.http.delete<any>(`${environment.baseUrl}?`+'id='+id);
  }

}
