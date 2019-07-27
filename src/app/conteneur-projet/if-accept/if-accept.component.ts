import { Component, OnInit } from '@angular/core';
import {EventProjectService} from '../../../services/event-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetService} from '../../../services/projet.service';
import {FactorService} from '../../../services/factor.service';
import {AuthentificationService} from '../../../services/authentification.service';

@Component({
  selector: 'app-if-accept',
  templateUrl: './if-accept.component.html',
  styleUrls: ['./if-accept.component.scss']
})
export class IfAcceptComponent implements OnInit {
  idProjet;
  projet;
   eventsAccept;
  eventsNonAccept;
  riskAcceptChart : number[]=[];
  riskNonAcceptChart : number[]=[];
  labels:string[]=[];
  eventsAccept2;
  eventsNonAccept2;
test:number[]=[1,2,2,3,7,5];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  ////////////////////
  public barChartData: any[] = [
    {data:this.riskNonAcceptChart, label: 'Risks to be Reduced'},
   {data: this.riskAcceptChart , label: 'Accepted Risks'}
  ];
  public barChartLabels: string[] = ['E2', 'E5', 'E1', 'E6', 'E3', 'E4'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ////////////////
  constructor(private authService:AuthentificationService,private  eventService:EventProjectService,private route: ActivatedRoute,private router:Router,private projetService: ProjetService,private factorService: FactorService) { }

  ngOnInit() {


    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.idProjet=id;
this.projetService.getProjet(this.idProjet).subscribe(dat=>{
  this.projet=dat;
  this.projetService.listEventAccept(this.idProjet).subscribe(data=>{
    this.eventsAccept=data;
    this.projetService.listEventNonAccept(this.idProjet).subscribe(data=>{
      this.eventsNonAccept=data;

  //    this.riskAcceptChart.push(this.eventsAccept[1].levelRisk*100);
      //this.riskAcceptChart=[];
     // this.riskNonAcceptChart=[];
     this.convertToChart();
    })
  })
})

  }

  updataLimitAccept(limitAccept) {
    this.projetService.updateLimitAccept(this.idProjet,limitAccept).subscribe(
      data=>{
        this.projetService.getProjet(this.idProjet).subscribe(dat=>{
          this.projet=dat;
          this.projetService.listEventAccept(this.idProjet).subscribe(data=>{
            this.eventsAccept=data;
            this.projetService.listEventNonAccept(this.idProjet).subscribe(data=>{
              this.eventsNonAccept=data;
              this.convertToChart();
location.reload();
            })
          })
        })


      }
    )

  }

  max(listEventPojet){

   for ( let i=0;i<(listEventPojet.length-1);i++)

    {



      for (let j = i+1; j < listEventPojet.length; j++) {
        if (listEventPojet[i].levelRisk < listEventPojet[j].levelRisk){
                    let x=listEventPojet[j];
                    listEventPojet[j]=listEventPojet[i];
                    listEventPojet[i]=x;
                }
          }

    }
  }


  tet(){
    this.test.push(this.eventsAccept[1].levelRisk*10);
  }


  convertToChart(){
    let test:number[];
      this.riskAcceptChart.length=0;
   //   this.riskNonAcceptChart=test;
    this.riskNonAcceptChart.length=0;
    this.labels.length=0;
this.eventsNonAccept2=this.eventsNonAccept;
this.max(this.eventsNonAccept2);
    this.eventsAccept2=this.eventsAccept;
    this.max(this.eventsAccept2);

      for (let i=0;i<this.eventsNonAccept2.length;i++){
              this.riskNonAcceptChart.push(this.eventsNonAccept2[i].levelRisk);
              this.riskAcceptChart.push(0);
              this.labels.push(this.eventsNonAccept2[i].undesirableEvent.code)
      }

    for (let i=0;i<this.eventsAccept2.length;i++){
      this.riskAcceptChart.push(this.eventsAccept2[i].levelRisk);
      this.riskNonAcceptChart.push(0);
      this.labels.push(this.eventsAccept2[i].undesirableEvent.code)

    }
console.log(this.riskNonAcceptChart);

  }

fichier;
  rapport() {
    console.log("init");
this.projetService.rapport(this.idProjet,this.authService.username).subscribe(
  data=>{
    this.fichier=data;
    console.log(this.fichier);
   // this.getFile2(this.fichier);
  }
);
  }




getFile2(data){
    console.log(data.path);
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
  getFile(path:string){
    this.projetService.getFile(path).pipe(
    );
  }


}
