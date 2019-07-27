

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/authentification.service';
import {UserService} from '../../../services/user.service';
import {ImpactService} from '../../../services/impact.service';
import {Impact} from '../../../model/model.impact';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent implements OnInit {
impacts;
impact: Impact=new Impact();
mode;
id;
impactNew ;
test1=0;
  constructor(private router:Router, private authService:AuthentificationService, private impactService: ImpactService) { }

  ngOnInit() {
    this.mode=0;
    this.impactService.getImpacts()
      .subscribe(data=>{this.impacts=data},
        err=>{
          // console.log(err);
        })

  }


  deleteImpact(id:number) {
    this.impactService.deleteImpact(id).subscribe(
      data=>{
        this.impactService.getImpacts()
          .subscribe(data=>{this.impacts=data},
            err=>{
              // console.log(err);
            })
      }


    );
  }

  onNew() {
    this.impact=new Impact();
this.modeAjout=0;
this.test1=0;
    if(this.mode==0){
    this.mode=1;}
    else{
      this.mode=0;
    }
  }


modeAjout=0;
  saveImpact() {
    this.modeAjout=1;
    let impactTest;
    if(this.impact.code!=undefined && this.impact.description!=undefined){

      this.impactService.getImpactByCode(this.impact.code).subscribe(data=> {
          impactTest = data;
          console.log(impactTest);
          if(impactTest==null){
            this.impactService.saveImpact(this.impact)
              .subscribe(data=>{
                this.mode=0;
                this.impactService.getImpacts()
                  .subscribe(data=>{this.impacts=data},
                    err=>{
                      // console.log(err);
                    })
              })

        }else{
            this.test1=1;

          }




    })}
    else {
      this.modeAjout=1;
    }
  }

  select(idSelect) {
    this.id=idSelect;
   this.impactService.getImpact(idSelect).subscribe(data=>{

     this.impactNew=data;
     console.log(this.impactNew);
   })
  }

  updateImpact(id:number) {
    console.log(id);
    console.log(this.impactNew);
    this.impactService.updateImpact(id,this.impactNew)
      .subscribe(data=>{
        this.id=-1;
        this.impactService.getImpacts()
          .subscribe(data=>{this.impacts=data},
            err=>{
              // console.log(err);
            })
      })
  }
}
