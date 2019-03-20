import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  roles: Array<any> = [];
  token: string;
  url = 'http://localhost:8080';
  role:string;
  constructor(private router: Router, private http: HttpClient) { }
  onSignin(form: NgForm) {
    //console.log(form.value);
    return this.http.post(this.url + '/login', form.value, { observe: "response" });
  }
  setToken(token: string) {
    localStorage.setItem("token", token);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(token).roles;
    // console.log('Token : '+this.getToken());
    // console.log("Roles : " + JSON.stringify(this.role));
    this.getRoles()
    console.log(this.role)
  }
  getCurrentUser() {
    let jwtHelper = new JwtHelperService();
    jwtHelper.decodeToken(this.getToken()).roles.forEach(element => {
      console.log(element.authority)
    });
    return jwtHelper.decodeToken(this.getToken()).sub;
  }
  register(user) {
    console.log('service log ' + user)
    return this.http.post(this.url + "/register", user, { observe: "response" });
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated() {
    if(localStorage.getItem('token')!=null){
      return true
    }
    return false
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  getRoles() {
    this.roles.forEach(element => {
      this.role=element.authority
    });
  }
  typeOfCurrentUser(){
    let jwtHelper = new JwtHelperService();
    jwtHelper.decodeToken(this.getToken()).roles.forEach(element => {
     this.role=element.authority
    });
    return this.role
  }
}
