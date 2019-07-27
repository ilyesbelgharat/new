import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {FactorService} from '../../../services/factor.service';
import {EventProjectService} from '../../../services/event-project.service';

@Component({
  selector: 'app-input-ahp',
  templateUrl: './input-ahp.component.html',
  styleUrls: ['./input-ahp.component.scss']
})
export class InputAHPComponent implements OnInit {
  idProjet;
  projet;
  idEvent;
  mode=0;
  factors;


  compArrayOutput: number[]=[];
  compArrayInput: number[]=[];
  test;

  constructor(private  eventService:EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService,private factorService: FactorService) { }



  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    this.projetService.getProjet(this.idProjet).subscribe(data=>{
      this.projet=data;
    this.factorService.getFactors().subscribe(data=>{
      this.factors=data;
      console.log(this.factors.length);

    })
    })
  }
tester(){
  for (let i=0;i<this.compArrayOutput.length;i++) {
    if (this.compArrayOutput[i] != undefined) {
      if( 9< this.compArrayOutput[i] || this.compArrayOutput[i]<0  ){
        return false;
      }

    }


  }
  return true;
}




  select(id) {
    this.idEvent=id;

    this.eventService.getCompArray(this.idEvent).subscribe(data=>{
      this.test=data;
console.log(this.test);

this.compArrayInput=this.test;
this.InputToOutput();
console.log(this.compArrayOutput);
    })

  }

  saveUpdate(idEvent) {
    this.compArrayInput = [];

    this.outputToInput();

    if (this.tester() == true) {
      this.eventService.setCompArray(idEvent, this.compArrayInput).subscribe(
        data => {

          this.eventService.getCompArray(this.idEvent).subscribe(data => {
            this.test = data;

            this.compArrayInput = this.test;
            this.InputToOutput();
            // this.calculPoid(this.idEvent);

            this.projetService.getProjet(this.idProjet).subscribe(data => {
              this.projet = data;

            })

          })
        }
      );
      //this.compArrayOutput=[];
      //this.InputToOutput();
      //this.compArrayInput=[];
      //console.log(this.compArrayOutput);


    }

  }
  calculPoid(id){

    console.log(id);
    this.eventService.methodeAHP(id).subscribe();

}




  outputToInput() {
    for (let i=0;i<this.factors.length;i++){
      for (let j=0;j<this.factors.length;j++) {
          if(i<j){
            this.compArrayInput.push(this.compArrayOutput[i*this.factors.length+j])
          }
      }
      }
  }

  InputToOutput() {
    let t=0;
    for (let i=0;i<this.factors.length;i++){
      for (let j=0;j<this.factors.length;j++) {
        if(i<j){
          this.compArrayOutput[i*this.factors.length+j]=this.compArrayInput[t];
          t++;
        }
      }
    }
  }

  methodeAHP(){
    this.eventService.methodeAHP(this.idEvent).subscribe();
  }


}
