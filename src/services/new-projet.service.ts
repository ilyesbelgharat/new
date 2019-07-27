import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from './authentification.service';
import {ProjetService} from './projet.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NewProjetService implements  OnInit{
  idProjet;
  constructor(private route: ActivatedRoute,private router:Router,private authService: AuthentificationService,private projetService: ProjetService ,private  userService: UserService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    console.log(this.idProjet);
  }



}
