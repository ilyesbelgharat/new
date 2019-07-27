import { Component, OnInit } from '@angular/core';
import {Impact} from '../../../model/model.impact';
import {UndesirableEvent} from '../../../model/model.undesirableEvent';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/authentification.service';
import {UndesirableEventService} from '../../../services/undesirable-event.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
 events;
  event: UndesirableEvent=new UndesirableEvent();
  mode;
  id;
  eventNew ;
  constructor(private router:Router, private authService:AuthentificationService, private eventService : UndesirableEventService) {


  }

  ngOnInit() {
    this.mode=0;
    this.eventService.getUndesirableEvents()
      .subscribe(data=>{this.events=data},
        err=>{
          // console.log(err);
        })
  }
  onNew() {
    this.event=new UndesirableEvent();
    this.modeAjout=0;
    this.test1=0;
    if(this.mode==0){
      this.mode=1;

    }else{
      this.mode=0;
    }

  }
  modeAjout=0;
  test1=0;
  saveEvent() {
   this.modeAjout=1;
    let eventTest;

    if(this.event.code!=undefined && this.event.description!=undefined){
    this.eventService.getUndesirableEventCode(this.event.code).subscribe(data=>{
        eventTest=data;
      if(eventTest==null){

        this.eventService.saveUndesirableEvent(this.event)
          .subscribe(data=>{
            this.mode=0;
            this.eventService.getUndesirableEvents()
              .subscribe(data=>{this.events=data},
                err=>{
                  // console.log(err);
                })
          })
      }else{
        this.test1=1;


      }


      }


    )



  }else{
    this.modeAjout=1;
    }
  }

  deleteEvent(id:number) {
    console.log(id);
    this.eventService.deleteUndesirableEvent(id).subscribe(data => {
      this.eventService.getUndesirableEvents()
        .subscribe(data => {
            this.events = data
          },
          err => {
            // console.log(err);
          })
    })
  }
  select(idSelect) {
    this.id=idSelect;
    this.eventService.getUndesirableEvent(idSelect)
    .subscribe(data=>{

      this.eventNew=data;
      console.log(this.eventNew);
    })
  }



  updateEvent(id:number) {
      console.log(id);
     console.log(this.eventNew);
     this.eventService.updateEvent(id,this.eventNew)
        .subscribe(data=>{
         this.id=-1;
         this.eventService.getUndesirableEvents()
           .subscribe(data=>{this.events=data},
              err=>{
                // console.log(err);
              })
       })
  }





}
