import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';
import {navItems2, navItems3} from '../_nav';
import {DOCUMENT} from '@angular/common';
import {ProjetService} from '../../services/projet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-conteneur-projet',
  templateUrl: './conteneur-projet.component.html',
  styleUrls: ['./conteneur-projet.component.scss']
})
export class ConteneurProjetComponent implements OnDestroy, OnInit {

  public navItems = navItems3;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  user;
  idProjet;
  proj;
  constructor(private route: ActivatedRoute,private router:Router,private authService: AuthentificationService,private projetService: ProjetService ,private  userService: UserService, @Inject(DOCUMENT) _document?: any,) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });



    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });


  }


  logOut() {
    this.authService.logout();
  }


  ngOnDestroy(): void {

    this.changes.disconnect();
  }

  ngOnInit() {

    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    console.log(this.authService.username);

    this.userService.getUtilisateur(this.authService.username).subscribe(
      data => {

        this.user = data;


        console.log(this.user);
      }
    )

    this.projetService.getProjet(this.idProjet).pipe().subscribe(data=>{

      this.proj=data;
    })

  }

}
