import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Factor} from '../../../../model/model.factor';
import {SourceDanger} from '../../../../model/model.sourceDanger';
import {AuthentificationService} from '../../../../services/authentification.service';
import {FactorService} from '../../../../services/factor.service';
import {SourceDangerService} from '../../../../services/source-danger.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {
  public idFactor;
  sources;
  source: SourceDanger=new SourceDanger();
  mode;

  constructor(private route: ActivatedRoute,private router:Router, private authService:AuthentificationService, private factorService : FactorService, private sourceService : SourceDangerService) {


  }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idFactor=id;

    this.mode=0;
    this.factorService.listSourceFactor(this.idFactor)
      .subscribe(data=>{this.sources=data},
        err=>{
          // console.log(err);
        })
  }

  onNew() {
    this.mode=1;
  }

  saveSource() {
    this.factorService.saveSourceFactor(this.idFactor,this.source)
      .subscribe(data=>{
        this.mode=0;
        this.factorService.listSourceFactor(this.idFactor)
          .subscribe(data=>{this.sources=data},
            err=>{
              // console.log(err);
            })
      })
  }

  deleteSource(id: number) {
    this.sourceService.deleteSourceDanger(this.idFactor,id).subscribe(
      data=>{
        this.factorService.listSourceFactor(this.idFactor)
          .subscribe(data=>{this.sources=data},
            err=>{
              // console.log(err);
            })
      }


    );



  }
}
