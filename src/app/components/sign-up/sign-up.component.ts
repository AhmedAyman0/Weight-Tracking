import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isUnique =true;
  message = null;
  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private loginserv:AuthService,
              private userServ:UserService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      gender:['',[]],
      password:['',[Validators.required]],
      weight:['',[Validators.required]]
    });
  }
  get form() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if(this.loginserv.ifUserNameUnique(this.registerForm.value.userName) ){
      this.isUnique=false;
      this.message = 'User Name is used before , pick another';
      return;
    } 
    let user = new User(this.registerForm.value.userName,this.registerForm.value.email,
                        this.registerForm.value.password,[],this.registerForm.value.gender,'') ;
    delete user._id;
    user.weights.push({weight:this.registerForm.value.weight,date:new Date()})

    this.userServ.add(user).subscribe(resp=>{
      this.loginserv.login(user.userName,user.password);
      this.router.navigateByUrl('/');

    })



  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}