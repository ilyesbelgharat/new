import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {SourceDanger} from '../model/model.sourceDanger';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class SourceDangerService {
  headersT ;

  constructor(private http: HttpClient, private authService:AuthentificationService) {
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.jwt});
    this.headersT=headers;
  }
  getSourceDanger(id: number) {
    return this.http.get('http://localhost:8080/sourceDangers/' + id,{headers:this.headersT}).pipe();
  }
  getSourceDangers() {
    return this.http.get('http://localhost:8080/sourceDangers',{headers:this.headersT});
  }

  saveSourceDanger(sourceDanger: SourceDanger) {
    return this.http.post('http://localhost:8080/sourceDangers', sourceDanger,{headers:this.headersT});
  }

  deleteSourceDanger(idFactor: number,idSource:number) {
    console.log(this.headersT);
    return  this.http.delete('http://localhost:8080/factors/'+idFactor+'/source/'+idSource,{headers:this.headersT});

  }

  updateSource(id:number, sourceDanger:SourceDanger){

    return this.http.put('http://localhost:8080/source/' + id,sourceDanger,{headers: this.headersT});

  }



}
