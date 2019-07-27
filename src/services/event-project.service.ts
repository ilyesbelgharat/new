import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {UndesirableEvent} from '../model/model.undesirableEvent';
import {UndesirableEventService} from './undesirable-event.service';

@Injectable({
  providedIn: 'root'
})


export class EventProjectService {
  headersT ;

  constructor(public http: HttpClient, private authService: AuthentificationService,private eventService:UndesirableEventService) {
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
    this.headersT = headers;
  }

  save(events:number[],idProjet : number) {

    for (let i = 0; i < events.length; i++) {
      console.log(i);
      console.log(events[i]);
      this.saveOne(events[i],idProjet).subscribe();

    }

  }


  deleteImpacts(idEvent:number) {
    return this.http.put('https://ilyesapprisk.herokuapp.com/eventProjet/'+idEvent,null, {headers: this.headersT}).subscribe();

  }



  saveImpacts(events:number[],idEvent:number) {
    console.log("events");

    console.log(events);
    return this.http.put('https://ilyesapprisk.herokuapp.com/eventProjetimpact/'+idEvent,events, {headers: this.headersT}).subscribe();


  }


    saveOne(idEvent:number,idProjet:number){
   // console.log('https://ilyesapprisk.herokuapp.com/eventProjet/'+idProjet+'/'+idEvent);
      return this.http.post('http://localhost:8080/eventProjet/'+idProjet+'/'+idEvent,null, {headers: this.headersT});

    }

  saveOne1(idsEvent:number[],idProjet:number){
    // console.log('https://ilyesapprisk.herokuapp.com/eventProjet/'+idProjet+'/'+idEvent);
    return this.http.post('http://localhost:8080/eventProjetSave/'+idProjet,idsEvent, {headers: this.headersT});

  }




    saveOneImpact(idEvent:number,idImpact:number){


      return this.http.put('https://ilyesapprisk.herokuapp.com/eventProjet/'+idEvent+'/'+idImpact,null, {headers: this.headersT}).pipe().subscribe();


    }




  resume(tab:number[],idEvent) {
    return this.http.post('https://ilyesapprisk.herokuapp.com/factorProjet/'+idEvent,tab,{headers: this.headersT});

  }

  resume1(tab:number[][],idEvent) {
    return this.http.post('https://ilyesapprisk.herokuapp.com/factorProjet1/'+idEvent,tab,{headers: this.headersT});

  }



    getListEventProjet(idProjet:number) {

       return this.http.get('https://ilyesapprisk.herokuapp.com/undesirableEventsFiltree/'+idProjet, {headers: this.headersT});
    }



    deleteFactorsProjetFromEventProjet(idEvent:number) {

    return this.http.put('https://ilyesapprisk.herokuapp.com/factorProjet/'+idEvent,null,{headers: this.headersT});
    }

    setCompArray(idEvent:number,compArray:number[]){
    return this.http.put('https://ilyesapprisk.herokuapp.com/eventProjetCompArray/'+idEvent,compArray,{headers: this.headersT});

  }

  getCompArray(idEvent:number){
    return this.http.get('https://ilyesapprisk.herokuapp.com/eventProjetCompArray/'+idEvent,{headers: this.headersT}).pipe();

  }

  methodeAHP(idEvent:number){

    return this.http.put('https://ilyesapprisk.herokuapp.com/eventProjetAHP/'+idEvent,null,{headers: this.headersT}).pipe();

  }
}
