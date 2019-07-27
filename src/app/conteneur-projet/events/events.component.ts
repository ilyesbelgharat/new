import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {NewProjetService} from '../../../services/new-projet.service';
import {UndesirableEventService} from '../../../services/undesirable-event.service';
import {UndesirableEvent} from '../../../model/model.undesirableEvent';
import {EventProjectService} from '../../../services/event-project.service';
import {EventProjet} from '../../../model/EventProjet';
import {AuthentificationService} from '../../../services/authentification.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private authService: AuthentificationService,private  eventProjetService: EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService, private  eventSource: UndesirableEventService) { }
  idProjet;
  events;
  eventsProjets:number[] = [];
  boool;

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
//console.log(this.idProjet);
   // this.eventSource.getUndesirableEvents().subscribe(data=>{

     // this.events=data;


  //  })

    this.eventProjetService.getListEventProjet(this.idProjet).subscribe(

      data=>{

        this.events=data;


          }
    )
  }


  save1(){

    this.eventProjetService.saveOne1(this.eventsProjets,this.idProjet).subscribe(
      data=>{
        this.eventProjetService.getListEventProjet(this.idProjet).subscribe(

          data=>{

            this.events=data;


          }
        )
      }

    );
  }



  save() {
    console.log(this.eventsProjets);
    for (let i = 0; i <this.eventsProjets.length; i++) {
      console.log(i);
      console.log(this.eventsProjets[i]);
      this.eventProjetService.saveOne(this.eventsProjets[i],this.idProjet).subscribe(data=>{

        this.eventProjetService.getListEventProjet(this.idProjet).subscribe(

          data=>{

            this.events=data;


          }
        )
      });

    }



  }



  exist(event:number){
    this.boool=-1;
    for (let j = 0; j < this.eventsProjets.length;j++){

      if(this.eventsProjets[j]==event){this.boool=j;}

    }
    console.log("000000000000000");
    console.log(this.boool);
    console.log("111111111111111");


  }

  changer(event:number) {

this.exist(event);
if(this.boool==-1){
    this.eventsProjets.push(event);
  }
if(this.boool>-1){
  console.log(this.boool);
  this.eventsProjets.splice(this.boool,1)


}

    this.exist(event);
    console.log(this.eventsProjets);


  }




}
