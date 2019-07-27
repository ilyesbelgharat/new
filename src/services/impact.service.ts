import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {UndesirableEvent} from '../Model/model.UndesirableEvent';
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
    return this.http.get('http://localhost:8080/impacts/' + id, {headers: this.headersT}).pipe();
  }

  getImpacts() {
    return this.http.get('http://localhost:8080/impacts', {headers: this.headersT});
  }

  saveImpact(impact: Impact) {
    console.log(this.headersT);
    return this.http.post('http://localhost:8080/impacts', impact, {headers: this.headersT});

  }


  deleteImpact(id: number) {

    return this.http.delete('http://localhost:8080/impacts/' + id, {headers: this.headersT});
  }


  updateImpact(id:number, impact:Impact) {
    console.log(impact);
    return this.http.put('http://localhost:8080/impacts/' + id, impact,{headers: this.headersT});

  }

  getImpactByCode(code:String){
    return this.http.get('http://localhost:8080/impactCode/' + code, {headers: this.headersT}).pipe();
  }


}
