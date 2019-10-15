import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  message: string = null;
  logined = false;
  loginedUser = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginserv: AuthService
  ) {

    this.loginserv.logined.subscribe(user => {
      this.loginedUser = user;
      if (user) {
        this.logined = true;
        this.router.navigateByUrl("/");

      } else {
        this.logined = false;
        this.message = 'Wrong cardentials';
        return;
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

    this.loginserv.login(
      this.loginForm.value.id,
      this.loginForm.value.password
    );
  }
}
