import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router, NavigationEnd } from "@angular/router";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit,OnDestroy {
  data: any;
  logined = false;
  loginedUser = null;
  navigationSubscription;
  user:any;
  initialiseInvites() {
    let user = JSON.parse(localStorage.getItem('user')) as User;
    this.userServ.getById(user._id).subscribe((resp:any)=>{
      console.log('resp',resp)
      this.user=resp;
      console.log(this.user);
      this.data = {
        labels: [],
        datasets: [
          {
            label: "Weight in Kg",
            data: [],
            fill: false,
            borderColor: "#4bc0c0"
          }
        ]
      };
      this.user.weights.forEach(element => {
        const date = new Date(element.date);
        this.data.labels.push(`${date.getDate()}/${date.getMonth() + 1}`);
        this.data.datasets[0].data.push(`${parseInt(element.weight)}`);
      });
    }
    );
    this.loginserv.logined.subscribe(user => {
      this.loginedUser = user;
      if (user) {
        this.logined = true;
      } else {
        this.logined = false;
      }
    });

      
  }


  constructor(private loginserv: AuthService, private router: Router,private userServ:UserService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

  }

  ngOnInit() {}
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }
}


