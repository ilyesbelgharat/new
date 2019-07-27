import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {ProbabilityScale} from '../model/model.probabilityScale';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ProbabilityScaleService {
  headersT;
  headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
  constructor(private http: Http, private authService: AuthentificationService) {

    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
    this.headersT = headers;
  }
  getProbabilityScale(id: number) {
    return this.http.get('https://ilyesapprisk.herokuapp.com/probabilityScales/' + id,{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
  getProbabilityScales() {
    return this.http.get('https://ilyesapprisk.herokuapp.com/probabilityScales',{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
  saveProbabilityScale(probabilityScale: ProbabilityScale) {
    return this.http.post('https://ilyesapprisk.herokuapp.com/robabilityScales', probabilityScale,{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
  deleteProbabilityScale(id: number) {
    return this.http.delete('https://ilyesapprisk.herokuapp.com/probabilityScales/' + id,{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
}
