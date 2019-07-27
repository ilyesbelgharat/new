import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../../services/authentification.service';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private router:Router, private authService:AuthentificationService, private userService: UserService) { }
  isAdmin(){

    return this.authService.initParams();
  }
  ngOnInit() {



  //  console.log(this.authService.jwt);

     this.userService.listUsers('http://localhost:8080/users')
     .subscribe(data=>{this.users=data},
         err=>{
         // console.log(err);
     })

  }
  deleteUser(c){
    console.log(c);
   this.userService.deleteUtilisateur(c)
     .subscribe(data=>{
       this.userService.listUsers('http://localhost:8080/users')
         .subscribe(data=>{this.users=data},
           err=>{
             // console.log(err);
           }) }

  );

  }

}
