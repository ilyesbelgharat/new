import { Component, OnInit } from '@angular/core';
import {FactorService} from '../../../services/factor.service';
import {ImpactService} from '../../../services/impact.service';
import {EventProjectService} from '../../../services/event-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {UndesirableEventService} from '../../../services/undesirable-event.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  idProjet;
  projet;
  modeImpact=0;
  idEventt;
  modeFactor=0;
  test;
  constructor(private factorService:FactorService, private  impactService:ImpactService,private  eventProjetService: EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService, private  eventSource: UndesirableEventService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;


    this.projetService.getProjet(this.idProjet).subscribe(data=>{
      this.projet=data;
      console.log(this.projet);



    })
    }



  select(id: number) {
    if(this.modeImpact==1){
      this.modeImpact=0;
      console.log(this.modeFactor);
    }

    else {
      this.modeImpact = 1;
      this.idEventt = id;
    }

  }

  selectFactor(id: number) {

    //   this.impactsProjets=[];

    if(this.modeFactor==1){
      this.modeFactor=0;
      console.log(this.modeFactor);
    }

    else {
      this.modeFactor = 1;
      this.idEventt = id;
    }
    console.log(this.modeFactor);
    console.log(this.idEventt);

    }





}
