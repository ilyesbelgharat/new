import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {ImpactScale} from '../model/model.impactScale';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ImpactScaleService {
  headersT;
  headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
  constructor(private http: Http, private authService: AuthentificationService) {
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
    this.headersT = headers;
  }
  getImpactScale(id: number) {
    return this.http.get('https://ilyesapprisk.herokuapp.com/impactScales/' + id,{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
  getImpactScales() {
    return this.http.get('https://ilyesapprisk.herokuapp.com/impactScales',{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
  saveImpactScale(impactScale: ImpactScale) {
    return this.http.post('https://ilyesapprisk.herokuapp.com/impactScales', impactScale,{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
  deleteImpactScale(id: number) {
    return this.http.delete('https://ilyesapprisk.herokuapp.com/impactScales/' + id,{headers: this.headersT})
      .pipe( map(resp => resp.json()));
  }
}
