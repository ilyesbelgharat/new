import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {IntervalScale} from '../model/model.intervalScale';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class IntervalScaleService {
  headersT ;
  idProject;


  constructor(private router : Router,private http: HttpClient, private authService:AuthentificationService) {
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
    this.headersT = headers;
  }



  getIntervalScale(id: number) {

    return this.http.get('https://ilyesapprisk.herokuapp.com/intervalScales/' + id,{headers: this.headersT}).pipe();

  }



  getIntervalScales() {

    return this.http.get('https://ilyesapprisk.herokuapp.com/intervalScales',{headers: this.headersT});
  }


  saveIntervalScale(intervalScale: IntervalScale) {

    return this.http.post('https://ilyesapprisk.herokuapp.com/IntervalScales', intervalScale,{headers: this.headersT});
  }


  updateIntervalScale(idScale:number ,intervalScale: IntervalScale) {
    console.log("houniiiiiiiiiiiiiii");
console.log(idScale);
    console.log("2000000000000");

console.log(intervalScale)
    console.log("205611320565");
    console.log("205611320565");

    return this.http.put('https://ilyesapprisk.herokuapp.com/intervalScales/'+idScale, intervalScale,{headers: this.headersT});

  }



  deleteIntervalScale(id: number) {

    return this.http.delete('https://ilyesapprisk.herokuapp.com/intervalScales/' + id,{headers: this.headersT});
  }



}
