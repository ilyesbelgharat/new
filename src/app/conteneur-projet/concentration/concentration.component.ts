import { Component, OnInit } from '@angular/core';
import {EventProjectService} from '../../../services/event-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {FactorService} from '../../../services/factor.service';

@Component({
  selector: 'app-concentration',
  templateUrl: './concentration.component.html',
  styleUrls: ['./concentration.component.scss']
})
export class ConcentrationComponent implements OnInit {
  idProjet;
  projet;
  idEvent;

  constructor(private  eventService:EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService,private factorService: FactorService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    this.projetService.getProjet(this.idProjet).subscribe(data=>{
      this.projet=data;
      this.projetService.concentration(this.idProjet).subscribe(
        data=>{
          this.projetService.getProjet(this.idProjet).subscribe(data=> {
            this.projet = data;
          })
        }

      );
    })
  }

}
