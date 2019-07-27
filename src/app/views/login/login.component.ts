import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  mode=0;

  constructor(private authService: AuthentificationService, private router: Router) {
  }
  ngOnInit() {
    if(this.authService.jwt){
      this.router.navigateByUrl('/choix')

    }
  }

  onLogin(data) {

    if (data.username!="" &&  data.password!="") {
    this.authService.login(data)
      .subscribe(resp=>{
        console.log(resp)
          let jwt=resp.headers.get('Authorization');

        this.authService.saveToken(jwt);

         this.router.navigateByUrl('/choix')
      },err=>{
        this.mode=1;

      });
  }

  }
  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }
}
