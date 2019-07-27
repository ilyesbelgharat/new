import { Component, OnInit } from '@angular/core';
import {EventProjectService} from '../../../services/event-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {UndesirableEventService} from '../../../services/undesirable-event.service';
import {ImpactService} from '../../../services/impact.service';
import {FactorService} from '../../../services/factor.service';

@Component({
  selector: 'app-list-event-final',
  templateUrl: './list-event-final.component.html',
  styleUrls: ['./list-event-final.component.scss']
})
export class ListEventFinalComponent implements OnInit {
  idProjet;
  events;
  modeImpact=0;
  modeFactor=0;
  idEventt;
  idFactor;
  impacts;
  factors;
  sources;
  impactsProjets:number[] = [];
  factorsProjets:number[][]=[];

  boool;
  boool2;
  modeSource=0;
projet;
  constructor(private factorService:FactorService, private  impactService:ImpactService,private  eventProjetService: EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService, private  eventSource: UndesirableEventService) {


  }


  ngOnInit() {


    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    console.log(this.idProjet);

       this.projetService.getListEvents(this.idProjet).subscribe(data=>{
       this.events=data;
   //    console.log(this.events);
      // console.log(this.idProjet);

   })
  }

  delete(idEvent:number){
    this.projetService.deleteEventProjet(this.idProjet,idEvent).subscribe(data=>{
      this.projetService.getListEvents(this.idProjet).subscribe(data=>{
        this.events=data;
        //    console.log(this.events);
        // console.log(this.idProjet);

      })

    })

  }


  selectFactor(id: number) {

 //   this.impactsProjets=[];
   this.factorsProjets=[];
    if(this.modeFactor==1){
      this.modeFactor=0;
    }
    else{
      this.factorService.getFactors().subscribe(data=>{
        this.factors=data;

      })

      this.modeFactor=1;
      this.idEventt=id;


    }
  }





  select(id: number) {
    this.impactsProjets=[];

    if(this.modeImpact==1){
      this.modeImpact=0;
    }
    else{
      this.impactService.getImpacts().subscribe(data=>{
      this.impacts=data;

    })

    this.modeImpact=1;
    this.idEventt=id;
  }
  }




  exist(event:number){
    this.boool=-1;
    for (let j = 0; j < this.impactsProjets.length;j++){

      if(this.impactsProjets[j]==event){this.boool=j;}

    }
    console.log("000000000000000");
    console.log(this.boool);
    console.log("111111111111111");


  }


  changer(idImpact: number) {
    this.exist(idImpact);
    if(this.boool==-1){
      this.impactsProjets.push(idImpact);
    }
    if(this.boool>-1){
      console.log(this.boool);
      this.impactsProjets.splice(this.boool,1)


    }

    this.exist(idImpact);
    console.log(this.impactsProjets);
  }


  save() {


  this.eventProjetService.deleteImpacts(this.idEventt);
  this.eventProjetService.saveImpacts(this.impactsProjets,this.idEventt);
    this.modeImpact=0;



  }



  changerSource(idSource: number) {



    this.existSource(this.idFactor,idSource);

    if(this.boool==-1){
      console.log("resultat");
      console.log(this.boool2);
      console.log(this.idFactor);

      console.log(this.factorsProjets);
      console.log("resultat");

       this.factorsProjets[this.boool2].push(idSource);
    }
    if(this.boool>-1){
      console.log(this.boool);
      this.factorsProjets[this.boool2].splice(this.boool,1)


    }

    this.existSource(this.idFactor,idSource);
  console.log(this.factorsProjets);



  }




  changerFactor(idFactor: number) {

    this.modeSource=1;
    this.idFactor=idFactor;






    this.factorService.listSourceFactor(idFactor).subscribe(data=>{

      this.sources=data;
      console.log(this.sources);

      this.existFactor(idFactor);
      if(this.boool==-1){
        this.factorsProjets.push([idFactor]);
      }
      if(this.boool>-1){
        console.log(this.boool);
        this.factorsProjets.splice(this.boool,1)


      }

      this.existFactor(idFactor);
      console.log(this.boool);

      console.log(this.factorsProjets);




    })





  }


  existFactor(event:number){
    this.boool=-1;
    for (let j = 0; j < this.factorsProjets.length;j++){

      if(this.factorsProjets[j][0]==event){this.boool=j;
      this.boool2=j;

      }

    }
    console.log("000000000000000");
    console.log(this.boool);
    console.log("111111111111111");


  }

  existSource(idFactor:number,idSource){
    this.boool=-1;
    for (let i = 0; i < this.factorsProjets.length;i++){
      for (let j = 1; j < this.factorsProjets[i].length;j++) {

        if (this.factorsProjets[i][j] == idSource) {
          this.boool = j;
        }
      }
    }
    console.log("000000000000000");
    console.log(this.boool);
    console.log("111111111111111");


  }


  saveFactors(idEvent) {


    this.eventProjetService.deleteFactorsProjetFromEventProjet(idEvent).pipe().subscribe();
    this.modeSource=0;
    this.modeFactor=0;
    for (let i=0;i<this.factorsProjets.length;i++) {
      console.log(i);
          console.log(this.factorsProjets[i]);
      console.log(i);

      this.eventProjetService.resume(this.factorsProjets[i],idEvent).subscribe();

    }



  }

  saveFactors1(idEvent) {


    this.eventProjetService.deleteFactorsProjetFromEventProjet(idEvent).pipe().subscribe();
    this.modeSource=0;
    this.modeFactor=0;


      this.eventProjetService.resume1(this.factorsProjets,idEvent).subscribe();

    }




}
