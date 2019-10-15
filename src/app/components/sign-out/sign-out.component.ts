import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {
  logined=false;
  loginedUser=null;
  constructor(private loginserv:AuthService,private router:Router) {
    loginserv.logout();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }

}
