import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { ChoixComponent } from './choix/choix.component';
import {UserService} from '../services/user.service';
import {ImpactService} from '../services/impact.service';
import {SourceDangerService} from '../services/source-danger.service';
import {UndesirableEventService} from '../services/undesirable-event.service';
import {FactorService} from '../services/factor.service';
import { ImpactComponent } from './conteneur2/impact/impact.component';
import { EvenementComponent } from './conteneur2/evenement/evenement.component';
import { FactorComponent } from './conteneur2/factor/factor.component';
import { SourceComponent } from './conteneur2/factor/source/source.component';
import {Conteneur2Component} from './conteneur2/conteneur2.component';
import {UrlPermission} from '../urlPermission/url.permission';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {Popup, PopupModule} from 'ng2-opd-popup';
import { NewProjectComponent } from './new-project/new-project.component';
import {ProjetService} from '../services/projet.service';
import { ConteneurProjetComponent } from './conteneur-projet/conteneur-projet.component';
import { EventsComponent } from './conteneur-projet/events/events.component';
import {NewProjetService} from '../services/new-projet.service';
import {EventProjectService} from '../services/event-project.service';
import { ListEventFinalComponent } from './conteneur-projet/list-event-final/list-event-final.component';
import { EventsDetailsComponent } from './conteneur-projet/events-details/events-details.component';
import { EchelleProbaComponent } from './conteneur-projet/echelle-proba/echelle-proba.component';
import {IntervalScale} from '../model/model.intervalScale';
import {IntervalScaleService} from '../services/interval-scale.service';
import { EchelleImpactComponent } from './conteneur-projet/echelle-impact/echelle-impact.component';
import {ImpactScaleService} from '../services/impact-scale.service';
import { InputEstimationImpactComponent } from './conteneur-projet/input-estimation-impact/input-estimation-impact.component';
import { InputAHPComponent } from './conteneur-projet/input-ahp/input-ahp.component';
import { ConcentrationComponent } from './conteneur-projet/concentration/concentration.component';
import { IfAcceptComponent } from './conteneur-projet/if-accept/if-accept.component';
import { EvalHistoriqueComponent } from './conteneur-projet/eval-historique/eval-historique.component';
import { ProjetsComponent } from './projets/projets.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    PopupModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ChoixComponent,
    Conteneur2Component,
    ImpactComponent,
    EvenementComponent,
    FactorComponent,
    SourceComponent,
    NewProjectComponent,
    ConteneurProjetComponent,
    EventsComponent,
    ListEventFinalComponent,
    EventsDetailsComponent,
    EchelleProbaComponent,
    EchelleImpactComponent,
    InputEstimationImpactComponent,
    InputAHPComponent,
    ConcentrationComponent,
    IfAcceptComponent,
    EvalHistoriqueComponent,
    ProjetsComponent,

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    AuthentificationService,
   UserService,ImpactService,SourceDangerService,UndesirableEventService,FactorService,UrlPermission,ProjetService,NewProjetService,EventProjectService,
    IntervalScaleService,ImpactScaleService,


  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
