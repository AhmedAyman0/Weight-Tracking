import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logined=false;
  loginedUser=null;
  constructor(private loginserv:AuthService) {
    this.loginserv.logined.subscribe(user=>{
      this.loginedUser=user;
      if(user){
        this.logined=true;
      }
      else{
        this.logined=false;
      }
    })
   }

  ngOnInit() {
  }

}
