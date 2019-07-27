import { Component, OnInit } from '@angular/core';
import {EventProjectService} from '../../../services/event-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {FactorService} from '../../../services/factor.service';

@Component({
  selector: 'app-eval-historique',
  templateUrl: './eval-historique.component.html',
  styleUrls: ['./eval-historique.component.scss']
})
export class EvalHistoriqueComponent implements OnInit {
  idProjet;
  projet;
files;

  constructor(private  eventService:EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService,private factorService: FactorService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
    this.projetService.getProjet(this.idProjet).subscribe(dat=>{
      this.projet=dat;
this.projetService.listFiles(this.idProjet).subscribe(data=>{
  this.files=data;
console.log(this.files);
})


    });
  }

  download(data){
    this.projetService.getFile2(data.path)
      .subscribe((blob: Blob) => {
        console.log('report is downloaded');

        if (navigator.msSaveBlob)
        {
          // IE 10+
          navigator.msSaveBlob(blob, data.fileName);
        }
        else
        {
          let link = document.createElement("a");
          if (link.download !== undefined)
          {
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", data.fileName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
          else
          {
            //html5 download not supported
          }
        }
      });

  }

  deleteFile(idFile){
    this.projetService.deleteFile(this.idProjet,idFile).subscribe(data=>{
      this.projetService.listFiles(this.idProjet).subscribe(data=>{
        this.files=data;
        console.log(this.files);
      })

    })
  }



}
