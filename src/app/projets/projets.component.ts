import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';
import {ProjetService} from '../../services/projet.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {
  user;
projets;
  constructor(private authService: AuthentificationService, private  userService:UserService,private projetService:ProjetService) { }

  ngOnInit() {
    console.log(this.authService.username);
    this.userService.getUtilisateur(this.authService.username).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
        this.projetService.listProjets().subscribe(
          data=>{

            this.projets=data;
          console.log(this.projets);
          }
        )

      }
    )
  }

  logOut() {

    this.authService.logout();

  }


  deleteProjet(id){
    this.projetService.deleteProjet(id).subscribe(data=>{
      this.projetService.listProjets().subscribe(
        data=>{

          this.projets=data;
          console.log(this.projets);
        }
      )

      }



    )

  }

}
