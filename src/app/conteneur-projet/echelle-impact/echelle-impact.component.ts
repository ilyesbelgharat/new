import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';

@Component({
  selector: 'app-echelle-impact',
  templateUrl: './echelle-impact.component.html',
  styleUrls: ['./echelle-impact.component.scss']
})
export class EchelleImpactComponent implements OnInit {
  idProjet;
  projet;
  min;
  max;
  modeMinor=0;
  modeModerate=0;
  modeStrong=0;
  constructor(private route: ActivatedRoute,private router:Router,private projetService: ProjetService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    console.log(this.idProjet);
    this.projetService.getProjet(this.idProjet).subscribe(data=>{
      this.projet=data;
      console.log(this.projet);

    })
  }

  saveMinor() {
    this.modeMinor=0;
    this.projetService.saveMinor(this.idProjet,this.min,this.max).subscribe(data=>{
      this.projetService.getProjet(this.idProjet).subscribe(data=>{
        this.projet=data;
        console.log(this.projet);

      })
      this.min=0;
      this.max=0;
    })

  }
  selectMinor() {
    this.modeMinor=1;
    this.min=this.projet.impactScale.minorImpact[0];
    this.max=this.projet.impactScale.minorImpact[this.projet.impactScale.strongImpact.length-1];
  }

  saveModerate() {
    this.modeModerate=0;
    this.projetService.saveModerate(this.idProjet,this.min,this.max).subscribe(data=> {
      this.projetService.getProjet(this.idProjet).subscribe(data => {
        this.projet = data;
        console.log(this.projet);

      })
    })
    this.min=0;
    this.max=0;
  }
  selectModerate() {
    this.modeModerate=1;
    this.min=this.projet.impactScale.moderateImpact[0];
    this.max=this.projet.impactScale.moderateImpact[this.projet.impactScale.strongImpact.length-1];
  }

  saveStrong() {
    this.modeStrong=0;
    this.projetService.saveStrong(this.idProjet,this.min,this.max).subscribe(data=> {
      this.projetService.getProjet(this.idProjet).subscribe(data => {
        this.projet = data;
        console.log(this.projet);

      })
    })

    this.min=0;
    this.max=0;

  }

  selectStrong() {
    this.modeStrong=1;
    this.min=this.projet.impactScale.strongImpact[0];
    this.max=this.projet.impactScale.strongImpact[this.projet.impactScale.strongImpact.length-1];
  }
}
