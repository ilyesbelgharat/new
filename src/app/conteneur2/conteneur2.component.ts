import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {navItems, navItems2} from '../_nav';
import {DOCUMENT} from '@angular/common';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-conteneur2',
  templateUrl: './conteneur2.component.html',
  styleUrls: ['./conteneur2.component.scss']
})
export class Conteneur2Component implements OnDestroy, OnInit {

  public navItems = navItems2;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  user;

  constructor(private authService: AuthentificationService, private  userService: UserService, @Inject(DOCUMENT) _document?: any,) {
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
    console.log(this.authService.username);
    this.userService.getUtilisateur(this.authService.username).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      }
    )

  }
}
