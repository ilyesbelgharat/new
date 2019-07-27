import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Factor} from '../Model/model.Factor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {SourceDanger} from '../model/model.sourceDanger';

@Injectable({
  providedIn: 'root'
})
export class FactorService {

  headersT ;
  listFSource;

  constructor(private http: HttpClient, private authService:AuthentificationService) {
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.jwt});
    this.headersT=headers;
  }

  getFactor(id: number) {
    return this.http.get('http://localhost:8080/factors/' + id,{headers:this.headersT});
  }

  getFactors() {
    return this.http.get('http://localhost:8080/factors',{headers:this.headersT});
  }

  getFactorCode(code:String) {
    return this.http.get('http://localhost:8080/factor/'+code,{headers:this.headersT});
  }

  getSourceCode(idFactor:number,code:String) {
    return this.http.get('http://localhost:8080/factor/'+idFactor+"/"+code,{headers:this.headersT});
  }

  saveFactor(factor: Factor) {
    console.log(factor);


    return this.http.post('http://localhost:8080/factors', factor,{headers:this.headersT});
  }

  deleteFactor(id: number) {
    return this.http.delete('http://localhost:8080/factors/' + id,{headers:this.headersT});
  }

  listSourceFactor(idFactor: number){
    return this.http.get('http://localhost:8080/factors/'+idFactor+'/source',{headers:this.headersT});

  }

  saveSourceFactor(idFactor:number, sourcce : SourceDanger){
    console.log(this.headersT);
    return this.http.post('http://localhost:8080/factors/'+idFactor+'/source',sourcce,{headers:this.headersT});

  }

  nbreSourceId(idFactor:number){
    return this.http.get('http://localhost:8080/factors/'+idFactor+'/nbreSource',{headers:this.headersT});

  }

  listNbreSource(){
    return this.http.get('http://localhost:8080/factors/nbresource',{headers:this.headersT});


  }


  updateFactor(id:number, factor:Factor) {
    return this.http.put('http://localhost:8080/factors/' + id, factor,{headers: this.headersT});

  }


}
