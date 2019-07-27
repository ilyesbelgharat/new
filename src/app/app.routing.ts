import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {ChoixComponent} from './choix/choix.component';
import {Conteneur2Component} from './conteneur2/conteneur2.component';
import {SourceComponent} from './conteneur2/factor/source/source.component';
import {EvenementComponent} from './conteneur2/evenement/evenement.component';
import {FactorComponent} from './conteneur2/factor/factor.component';
import {ImpactComponent} from './conteneur2/impact/impact.component';
import {UrlPermission} from '../urlPermission/url.permission';
import {NewProjectComponent} from './new-project/new-project.component';
import {ConteneurProjetComponent} from './conteneur-projet/conteneur-projet.component';
import {EventsComponent} from './conteneur-projet/events/events.component';
import {ListEventFinalComponent} from './conteneur-projet/list-event-final/list-event-final.component';
import {EventsDetailsComponent} from './conteneur-projet/events-details/events-details.component';
import {EchelleProbaComponent} from './conteneur-projet/echelle-proba/echelle-proba.component';
import {EchelleImpactComponent} from './conteneur-projet/echelle-impact/echelle-impact.component';
import {InputEstimationImpactComponent} from './conteneur-projet/input-estimation-impact/input-estimation-impact.component';
import {InputAHPComponent} from './conteneur-projet/input-ahp/input-ahp.component';
import {ConcentrationComponent} from './conteneur-projet/concentration/concentration.component';
import {IfAcceptComponent} from './conteneur-projet/if-accept/if-accept.component';
import {EvalHistoriqueComponent} from './conteneur-projet/eval-historique/eval-historique.component';
import {ProjetsComponent} from './projets/projets.component';
import {UrlPermission2} from '../urlPermission/url.permission2';

export const routes: Routes = [
  {
    path: 'projets',
    component: ProjetsComponent,
    canActivate: [UrlPermission],

  },



  {
    path: 'projets/:id',
    component: ConteneurProjetComponent,
    canActivate: [UrlPermission],
   children:[{
     path: 'events/:id',
     component: EventsComponent,
     canActivate: [UrlPermission],

   },
     {
       path: 'eventsProjet/:id',
       component: ListEventFinalComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'eventsDetails/:id',
       component: EventsDetailsComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'echelleProba/:id',
       component: EchelleProbaComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'echelleImpact/:id',
       component: EchelleImpactComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'InputEstimation/:id',
       component: InputEstimationImpactComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'InputAHP/:id',
       component: InputAHPComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'concentration/:id',
       component: ConcentrationComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'Result/:id',
       component: IfAcceptComponent,
       canActivate: [UrlPermission],

     },
     {
       path: 'Historique/:id',
       component: EvalHistoriqueComponent,
       canActivate: [UrlPermission],

     }
     ]

  },


  {
    path: 'conteneur2',
    component: Conteneur2Component,
    canActivate: [UrlPermission],
    children:[{
      path: 'impact',
      component: ImpactComponent,
      canActivate: [UrlPermission],

    },
      {
        path: 'factor',
        component: FactorComponent,
        canActivate: [UrlPermission],


      },
      { path: 'factor/:id',
        component: SourceComponent,
        canActivate: [UrlPermission],

      },
      {
        path: 'evenement',
        component: EvenementComponent,
        canActivate: [UrlPermission],

      },

    ],
  },


  {
    path: 'newProject',
    component: NewProjectComponent,
    canActivate: [UrlPermission],},
  {
    path: 'choix',
    component: ChoixComponent,
    canActivate: [UrlPermission],

    data: {
      title: 'Menu'
    }  }, {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [UrlPermission],

  },
  {
    path: '404',
    component: P404Component,
    canActivate: [UrlPermission],

    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    canActivate: [UrlPermission],

    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: LoginComponent,


    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'login',
    component: LoginComponent,


    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UrlPermission],

    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [UrlPermission],

    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
