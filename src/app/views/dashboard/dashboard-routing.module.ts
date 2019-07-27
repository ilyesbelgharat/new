import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {UserService} from '../../../services/user.service';
import {UsersComponent} from './users/users.component';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'users',
    component:UsersComponent},
  {
    path:'ajoutUser',
    component:NewUserComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DashboardRoutingModule {}
