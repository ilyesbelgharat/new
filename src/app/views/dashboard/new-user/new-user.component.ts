import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from '../../../../services/authentification.service';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../model/model.user';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user:User=new User();
  headersT;
  mode=0;
  modeUsername=0;
  constructor( private http:HttpClient, private userService:UserService,private  authService: AuthentificationService,private router: Router) {

    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.jwt});
    this.headersT=headers;

  }

  ngOnInit() {
  }
foo1;
  modeFile=0;
  save(){
    this.mode=1;

    this.userService.getUtilisateur(this.user.username).subscribe(data=>{
      console.log(data);
      if(data!=null){

        this.modeUsername=1;
      }
      else{

        this.save3();

      }

    })

  }

  save3() {
    let form = document.forms.namedItem("fileinfo");
    let oData = new FormData(document.forms.namedItem('fileinfo'));
    let foo: File;
    console.log(oData);
    let file = oData.get('file');

    foo = <File>file;
    this.foo1=foo;
    if(foo==null){this.modeFile=1;}
    if (foo!=null && this.user.lastName!="" && this.user.firstName!=""
      && this.user.birthDate!=null && this.user.password!=""&& this.user.username!="" && this.user.email!=""
      && this.user.poste!=""
    ) {


      this.http.post("https://ilyesapprisk.herokuapp.com/photos",oData,{headers:this.headersT})
        .subscribe(data=>{
          console.log(data);
          console.log("hhhhhhhhhhhh");
          this.user.photo=data;
          this.save1();

          },err=>{
          console.log(err);
        }
        )


    }

  }

    save1() {
    if(this.user.password==null)
    {
      alert("vous devez choisir un mot de passe svp")
    }
    else if(this.user.username==null){
      alert("vous devez choisir une addresse  svp")
    }
    else{
      console.log(this.user);
      this.userService.saveUtilisateur(this.user)
        .subscribe(data=>{

          if(data)
          {
             if(confirm("User Ajoutee")){
               this.user=new User();
               this.mode=0;
               this.modeUsername=0;
               this.modeFile=0;
             }

          }
          else {

            alert("l'Username que vous venez de saisir est déjà utiliser")

          };

        });
    }
  }

}
