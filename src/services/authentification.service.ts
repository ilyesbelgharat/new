import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Local} from 'protractor/built/driverProviders';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   host2: string = 'http://localhost:8080';
   jwt: string;
   username:string;
   roles:Array<string>;

  constructor(private http: HttpClient,private router: Router) { }
  login(data) {
      console.log(data);
    return this.http.post(this.host2+'/login', data,{observe:'response'});
  }
  saveToken(jwt:string) {
      localStorage.setItem('token',jwt);

    this.jwt=jwt;

    this.parseJWT();
  }
  parseJWT() {

    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.sub;

    this.roles=objJWT.roles;

  }
  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
    return this.roles.indexOf('USER')>=0;
  }
  isAuthenticated() {
    return this.roles && (this.isUser()|| this.isAdmin());
  }

  loadToken() {
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem('token');
    this.initParams();
    this.router.navigateByUrl('/login');
  }

  initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
}
