import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { BehaviorSubject, Observable } from "rxjs";
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  private _logined: BehaviorSubject<User>;

  users:User[] = [];
  constructor(private userserv:UserService,private router:Router) {
    this.userserv.getAll().subscribe((resp:any)=>{
      this.users = resp as User[];
    })
   this._logined = new BehaviorSubject(null);
    
  }
  
  register(user: User) {
    this.userserv.add(user).subscribe(resp=>{
      return this._logined.next(user);
    })
  }
  get logined(){
    return this._logined.asObservable();
  } 
  login(id: string, password: string) {
    console.log(id,password)
    console.log(this.users);
    this.userserv.getAll().subscribe((resp:any)=>{
      this.users = resp as User[];
      let user = this.users.find(a => a.userName == id && a.password==password);
      localStorage.setItem("user", JSON.stringify(user));
      return this._logined.next(user);
    })

  }
  ifUserNameUnique(id:string):boolean{
    let user = this.users.find(a=>a.userName==id);
    return user? true:false;
  }
  logout() {
    localStorage.setItem("user", null);
    return this._logined.next(null);
  }

}