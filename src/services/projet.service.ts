import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Projet} from '../Model/model.Projet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Router} from '@angular/router';
import {IntervalScale} from '../model/model.intervalScale';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  headersT ;
  idProject;

  constructor(private router : Router,private http: HttpClient, private authService:AuthentificationService) {

    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.jwt});
    this.headersT = headers;
  }

  getProjet(id: number) {
    return this.http.get('http://localhost:8080/projets/' + id,{headers:this.headersT}).pipe();
  }
  getProjets() {
    return this.http.get('http://localhost:8080/projets',{headers:this.headersT});
  }



  saveProjet(projet: Object) {
    return this.http.post('http://localhost:8080/projets', projet,{headers:this.headersT}).pipe();

  }



  saveProjet1(projet: Object,username:string) {
    return this.http.post('http://localhost:8080/projets/'+username, projet,{headers:this.headersT}).pipe().subscribe(
      data=>{
        this.idProject=data;
        this.router.navigate(['/projets',this.idProject]);
      }

    )
  }



  deleteProjet(id: number) {
    return this.http.delete('http://localhost:8080/projets/' + id,{headers:this.headersT});
  }

  getListEvents(idProjet: number){
    return this.http.get('http://localhost:8080/projets/'+idProjet+'/eventsProjet',{headers:this.headersT});
  }

  deleteEventProjet(idProjet:number, idEvent:number) {
    console.log(idProjet);
    console.log(idEvent);
    return this.http.put('http://localhost:8080/projets/'+idProjet+'/events/' + idEvent,null,{headers: this.headersT});


  }
  deleteIntervalFromProjet(idProjet:number, idInterval:number) {
    console.log(idProjet);
    console.log(idInterval);
    console.log("000000000")

    console.log(this.headersT);
    console.log("000000000")
    return this.http.put('http://localhost:8080/projets/'+idProjet+'/interval/' + idInterval,null,{headers: this.headersT}).pipe();

  }

  addInterval(idProjet:number , intervalScale:IntervalScale){
    console.log(idProjet);
    console.log(intervalScale);
    return this.http.put('http://localhost:8080/projets/'+idProjet+'/interval' ,intervalScale,{headers: this.headersT}).pipe();
}

saveMinor(idProjet:number,min:number,max:number) {
    console.log(idProjet);
    console.log(min);
    console.log(max);
    let minMax:number[]=[];
    minMax.push(min);
    minMax.push(max);
  return this.http.put('http://localhost:8080/projets/'+idProjet+'/impactScaleMinor' ,minMax,{headers: this.headersT}).pipe();

}
  saveModerate(idProjet:number,min,max) {
    let minMax:number[]=[];
    minMax.push(min);
    minMax.push(max);
    console.log("minmax");
    console.log(minMax);
    console.log("minmax");

    return this.http.put('http://localhost:8080/projets/'+idProjet+'/impactScaleModerate' ,minMax,{headers: this.headersT}).pipe();

  }
  saveStrong(idProjet:number,min:number,max:number) {
    let minMax:number[]=[];
    minMax.push(min);
    minMax.push(max);
    console.log("stronggggggggggggggggggggg");
    return this.http.put('http://localhost:8080/projets/'+idProjet+'/impactScaleStrong' ,minMax,{headers: this.headersT}).pipe();

  }
concentration(idProjet:number){
  return this.http.put('http://localhost:8080/projets/'+idProjet+'/concentration',null,{headers: this.headersT}).pipe();

}
listEventAccept(idProjet: number){
  return this.http.get('http://localhost:8080/projets/'+idProjet+'/eventsAccept',{headers: this.headersT}).pipe();
}
  listEventNonAccept(idProjet: number){
    return this.http.get('http://localhost:8080/projets/'+idProjet+'/eventsNonAccept',{headers: this.headersT}).pipe();
  }

  updateLimitAccept(idProjet:number,limitAccept:number) {
    console.log(limitAccept);
    return this.http.put('http://localhost:8080/projets/'+idProjet+'/limitAccept/'+limitAccept,null,{headers: this.headersT}).pipe();


  }


  rapport(idProjet:number,username:string){
    console.log(this.headersT);
    return this.http.post('http://localhost:8080/html2pdf/'+idProjet+'/'+username,null,{headers: this.headersT})
      .pipe();

  }

  getFile(path:string) {
    return this.http.get(path,{headers: this.headersT}).pipe();

  }
getFile2(path:string){
 return  this.http.get(path,{headers: this.headersT,  responseType: 'blob'})
}

listFiles(idProjet){
    return this.http.get('http://localhost:8080/files/'+idProjet,{headers: this.headersT}).pipe();
}

deleteFile(idProjet,idFile){
  return this.http.delete('http://localhost:8080/files/'+idProjet+'/'+idFile,{headers: this.headersT}).pipe();

}

  listProjets(){
    return this.http.get('http://localhost:8080/Listprojets',{headers: this.headersT}).pipe();
  }




}
