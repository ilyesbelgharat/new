import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {IntervalScaleService} from '../../../services/interval-scale.service';
import {IntervalScale} from '../../../model/model.intervalScale';

@Component({
  selector: 'app-echelle-proba',
  templateUrl: './echelle-proba.component.html',
  styleUrls: ['./echelle-proba.component.scss']
})
export class EchelleProbaComponent implements OnInit {
  idProjet;
  projet;
modeUpdate=0;
  idInterval;
  intervalNew ;
  modeEchelle=0;
  interval:IntervalScale=new IntervalScale();
  constructor(private route: ActivatedRoute,private router:Router,private projetService: ProjetService,private intervalScaleService:IntervalScaleService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;

    this.projetService.getProjet(this.idProjet).subscribe(data=>{
      this.projet=data;
      console.log(this.projet);

  })

}

  saveUpdate(id:number) {
    this.modeUpdate=0;
    this.idInterval=-1;

    this.intervalScaleService.updateIntervalScale(id,this.intervalNew)
      .subscribe(data=>{

        this.projetService.getProjet(this.idProjet).subscribe(data=>{
          this.projet=data;
          console.log(this.projet);

        })
      })


  }

  selectUpdate(id:number) {
    this.idInterval=id;
    this.modeUpdate=1;

    this.intervalScaleService.getIntervalScale(id).subscribe(data=>{

      this.intervalNew = data;

      console.log(this.intervalNew);
    })
  }

  delete(id: number) {
this.projetService.deleteIntervalFromProjet(this.idProjet,id).subscribe(data=>{
  this.projetService.getProjet(this.idProjet).subscribe(data=>{
    this.projet=data;
    console.log(this.projet);

  })

})


  }

  saveEchelle() {
    this.modeEchelle=0;
    console.log("0000000000000");
    console.log(this.interval);
    console.log("0000000000000");

    this.projetService.addInterval(this.idProjet,this.interval).subscribe(data=>{

      this.projetService.getProjet(this.idProjet).subscribe(data=>{
        this.projet=data;
        console.log(this.projet);

      })

    })

  }

  selectSave(){

    this.interval=new IntervalScale();
    if(this.modeEchelle==0){this.modeEchelle=1}
    else {this.modeEchelle=0}
    console.log(this.modeEchelle);


  }
}
