import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
