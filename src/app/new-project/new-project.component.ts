import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';
import {Projet} from '../../model/model.projet';
import {ProjetService} from '../../services/projet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  user;
  projet:Projet=new Projet();
  idProjet;
  proj;
mode=0;
  constructor(private router: Router,private authService: AuthentificationService, private  userService:UserService,private projetService: ProjetService) { }



  ngOnInit() {



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




  save() {

    this.mode=1;
    if ( this.projet.type!=undefined && this.projet.nameProject!=undefined
      && this.projet.description!=undefined && this.projet.departement!=undefined
    ) {

      this.projetService.saveProjet1(this.projet, this.authService.username);
    }
  }




}
