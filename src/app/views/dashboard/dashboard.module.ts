import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../app.routing';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AuthentificationService} from '../../../services/authentification.service';
import {UserService} from '../../../services/user.service';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import {AppHeaderModule, AppSidebarModule} from '@coreui/angular';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    CommonModule,
    AppHeaderModule,
    AppSidebarModule

  ],
  declarations: [  DashboardComponent, UsersComponent, NewUserComponent],
  providers: [
    AuthentificationService,
    UserService,
  ],
})
export class DashboardModule { }
