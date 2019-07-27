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
export class ImpactService {

  headersT;
  headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});

  constructor(public http: HttpClient, private authService: AuthentificationService) {
      this.authService.loadToken();
      this.authService.parseJWT();
      let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
      this.headersT = headers;
  }

  getImpact(id: number) {
    return this.http.get('https://ilyesapprisk.herokuapp.com/impacts/' + id, {headers: this.headersT}).pipe();
  }

  getImpacts() {
    return this.http.get('https://ilyesapprisk.herokuapp.com/impacts', {headers: this.headersT});
  }

  saveImpact(impact: Impact) {
    console.log(this.headersT);
    return this.http.post('https://ilyesapprisk.herokuapp.com/impacts', impact, {headers: this.headersT});

  }


  deleteImpact(id: number) {

    return this.http.delete('https://ilyesapprisk.herokuapp.com/impacts/' + id, {headers: this.headersT});
  }


  updateImpact(id:number, impact:Impact) {
    console.log(impact);
    return this.http.put('https://ilyesapprisk.herokuapp.com/impacts/' + id, impact,{headers: this.headersT});

  }

  getImpactByCode(code:String){
    return this.http.get('https://ilyesapprisk.herokuapp.com/impactCode/' + code, {headers: this.headersT}).pipe();
  }


}
