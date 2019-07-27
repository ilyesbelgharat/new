import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {UndesirableEvent} from '../model/model.undesirableEvent';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Impact} from '../model/model.impact';

@Injectable({
  providedIn: 'root'
})
export class UndesirableEventService {

  headersT ;

  constructor(private http: HttpClient,  private authService:AuthentificationService) {
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.jwt});
    this.headersT=headers;
  }

  getUndesirableEvent(id: number) {
    return this.http.get('https://ilyesapprisk.herokuapp.com/undesirableEvents/' + id,{headers: this.headersT}).pipe();
  }
  getUndesirableEventCode(code: String) {
    return this.http.get('https://ilyesapprisk.herokuapp.com/undesirableEventCode/' + code,{headers: this.headersT}).pipe();
  }
  getUndesirableEvents() {

    return this.http.get('https://ilyesapprisk.herokuapp.com/undesirableEvents',{headers: this.headersT});
  }

  saveUndesirableEvent(undesirableEvent: UndesirableEvent) {

    return this.http.post('https://ilyesapprisk.herokuapp.com/undesirableEvents', undesirableEvent,{headers: this.headersT});
  }
  deleteUndesirableEvent(id: number) {
    return this.http.delete('https://ilyesapprisk.herokuapp.com/undesirableEvents/' + id,{headers: this.headersT});
  }

  updateEvent(id:number, event:UndesirableEvent) {
    console.log(event);
    return this.http.put('https://ilyesapprisk.herokuapp.com/undesirableEvents/' + id, event,{headers: this.headersT});
  }

}
