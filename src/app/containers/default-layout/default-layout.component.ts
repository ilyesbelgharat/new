import {Component, OnDestroy, Inject, NgModule, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../views/dashboard/dashboard.component';
import {AuthentificationService} from '../../../services/authentification.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent implements OnDestroy, OnInit {
  user;

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;


  constructor(private authService: AuthentificationService, private  userService: UserService,@Inject(DOCUMENT) _document?: any) {
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
