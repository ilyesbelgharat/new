import { Component, OnInit } from '@angular/core';
import {Impact} from '../../../model/model.impact';
import {Factor} from '../../../model/model.factor';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/authentification.service';
import {ImpactService} from '../../../services/impact.service';
import {FactorService} from '../../../services/factor.service';
import {SourceDangerService} from '../../../services/source-danger.service';
import {SourceDanger} from '../../../model/model.sourceDanger';
import {UndesirableEvent} from '../../../model/model.undesirableEvent';

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.scss']
})
export class FactorComponent implements OnInit {
  factors ;
  factor: Factor=new Factor();
  mode;
  sources;
  id;
  id1;
  modeSource;
  source: SourceDanger=new SourceDanger();
  list=0;
  id2;
  id3;
  factorNew;
  sourceNew;
  constructor( private sourceService : SourceDangerService,private router:Router, private authService:AuthentificationService, private factorService : FactorService) {


  }

  selectSource(idSelect) {
    this.id2=idSelect;
    this.sourceService.getSourceDanger(idSelect)
      .subscribe(data=>{

        this.sourceNew=data;
        console.log(this.sourceNew);
      })
  }

  ngOnInit() {
    this.mode=0;
    this.factorService.getFactors()
      .subscribe(data=>{this.factors=data},
        err=>{
          // console.log(err);
        })
    }
      listSources(idFactor:number){

       if(this.list==0){this.list=1;}
         else{this.list=0;}
        console.log(this.list);
        this.id=idFactor;
        this.factorService.listSourceFactor(idFactor)
          .subscribe(data=>{this.sources=data},
            err=>{
              // console.log(err);
            })
      }


    onNew() {
      this.factor=new Factor();
      this.modeAjout=0;
      this.test1=0;
      if(this.mode==0){
        this.mode=1;

      }else{
        this.mode=0;
      }
  }
  onNewSource(id:number) {
    this.id1=id;

    this.source=new SourceDanger();
    this.modeAjout2=0;
    this.test2=0;
    if(this.modeSource==0){
      this.modeSource=1;

    }else{
      this.modeSource=0;
    }
  }
  deleteFactor(id: number) {

    this.factorService.deleteFactor(id).subscribe(
      data=>{
        this.factorService.getFactors()
          .subscribe(data=>{this.factors=data},
            err=>{
              // console.log(err);
            })
      }


    );

  }

  deleteSource(id: number,idFactor:number) {
    this.sourceService.deleteSourceDanger(idFactor,id).subscribe(
      data=>{
        this.factorService.getFactors()
          .subscribe(data=>{this.factors=data},
            err=>{
              // console.log(err);
            })

        this.factorService.listSourceFactor(idFactor)
          .subscribe(data=>{this.sources=data;
          },
            err=>{
              // console.log(err);
            })
      })
  }
  modeAjout2=0;
  test2=0;
    saveSource(idFactor) {
      this.modeAjout2 = 1;
      let sourceTest;
      if (this.source.code != undefined && this.source.description != undefined) {

        this.factorService.getSourceCode(this.id1,this.source.code).subscribe(data => {
          sourceTest = data;
          if (sourceTest == null) {
          this.factorService.saveSourceFactor(idFactor,this.source)
      .subscribe(data=>{
        this.modeSource=0;
        this.factorService.listSourceFactor(idFactor)
          .subscribe(data=>{this.sources=data},
            err=>{
              // console.log(err);
            })
      })
  }else{

            this.test2=1;

          }



    })}

    }

modeAjout=0;
  test1=0;
  saveFactor() {
    this.modeAjout = 1;
    let factorTest;
    console.log(this.factor);
    if (this.factor.code != undefined && this.factor.description != undefined) {
      this.factorService.getFactorCode(this.factor.code).subscribe(data => {
        factorTest = data;
        if (factorTest == null) {

          this.factorService.saveFactor(this.factor)
            .subscribe(data => {
              this.mode = 0;
              this.factorService.getFactors()
                .subscribe(data => {
                    this.factors = data
                  },
                  err => {
                    // console.log(err);
                  })
            })

        } else {
          this.test1 = 1;


        }
      })

    }
  }

  onSelect(data) {
    this.router.navigate(['/conteneur2/factor',data.id]);
    
  }

  sousFamilleEmpty(id:number) {

     this.factorService.nbreSourceId(id).subscribe(data=>{
      let nbrSource=data;
      return nbrSource;
    })


  }

  updateSource(id: number,idF:number) {
    this.sourceService.updateSource(id,this.sourceNew)
      .subscribe(data=>{
        this.id2=-1;
        this.factorService.listSourceFactor(idF)
          .subscribe(data=>{this.sources=data;
            },
            err=>{
              // console.log(err);
            })
      })

  }

  selectFactor(idSelect: number) {
    this.id3=idSelect;
    this.factorService.getFactor(idSelect)
      .subscribe(data=>{

        this.factorNew=data;
        console.log(this.factorNew);
      })

  }

  updateFactor(id:number) {
    console.log(id);
    console.log(this.factorNew);
    this.factorService.updateFactor(id,this.factorNew)
      .subscribe(data=>{
        this.id3=-1;
        this.factorService.getFactors()
          .subscribe(data=>{this.factors=data},
            err=>{
              // console.log(err);
            })
      })
  }
}
