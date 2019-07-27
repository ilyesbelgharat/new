import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {ImpactService} from '../../../services/impact.service';

@Component({
  selector: 'app-input-estimation-impact',
  templateUrl: './input-estimation-impact.component.html',
  styleUrls: ['./input-estimation-impact.component.scss']
})
export class InputEstimationImpactComponent implements OnInit {
  idProjet;
  projet;
  impacts;
  mode=0;
  constructor(private route: ActivatedRoute,private router:Router,private projetService: ProjetService,private impactService:ImpactService) { }
  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    console.log(this.idProjet);
    this.projetService.getProjet(this.idProjet).subscribe(data=>{
      this.projet=data;
      console.log(this.projet);
      this.impactService.getImpacts().subscribe(data=>{
        this.impacts=data;
        console.log(this.impacts);

        console.log(this.projet.eventProjets[0].estimationImpact[25]);

      })
    })

  }

  selectUpdate() {
    this.mode=1;
  }

  saveUpdate() {

    this.mode=0;

    console.log(this.projet.eventProjets);

    this.projetService.saveProjet(this.projet).subscribe(data=>{
      this.projetService.getProjet(this.idProjet).subscribe(data=>{
        this.projet=data;

      })
    })
  }
}
