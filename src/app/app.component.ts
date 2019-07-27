import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthentificationService,private router: Router) { }
  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }
  isAuthenticated(){
    this.authService.isAuthenticated();
  }
  ngOnInit() {
        return this.authService.loadToken();
  }
  logOut() {
    this.authService.logout();
  }
}
