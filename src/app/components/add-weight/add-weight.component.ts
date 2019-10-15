import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-weight",
  templateUrl: "./add-weight.component.html",
  styleUrls: ["./add-weight.component.css"]
})
export class AddWeightComponent implements OnInit {
  constructor(
    private aroute: ActivatedRoute,
    private router: Router,
    private userServ: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.weightForm = this.formBuilder.group({
      weight: ["", [Validators.required]],
      date: ["", [Validators.required]]
    });
  }
  id;
  weightForm: FormGroup;
  submitted = false;
  bsValue = new Date();
  user: User;
  ngOnInit() {
    this.aroute.params.subscribe(params => {
      this.id = params.id;
      this.userServ.getById(this.id).subscribe((resp: any) => {
        this.user = resp as User;
      });
    });
  }

  get form() {
    return this.weightForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.weightForm.invalid) {
      return;
    }
    let weight = {weight: this.weightForm.value.weight, date:this.weightForm.value.date}
    this.user.weights.push(weight);
    console.log(this.user);
    delete this.user._id;
    this.userServ.editUser(this.id,this.user).subscribe((resp=>{
      console.log(resp);
      this.router.navigateByUrl('/history');
    }))
  }
}
