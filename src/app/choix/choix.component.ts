import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';
import {User} from '../../model/model.user';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss']
})


export class ChoixComponent implements OnInit {
  user;

  constructor(private authService: AuthentificationService, private  userService:UserService) { }
  isAdmin(){
    return this.authService.isAdmin();}
  isUser(){return this.authService.isUser();}
  ngOnInit() {
  console.log(this.authService.username);
  this.userService.getUtilisateur(this.authService.username).subscribe(
    data=>{
      this.user=data;
      console.log(this.user);
    }
  )
  }
  logOut() {

    this.authService.logout();

  }

}
