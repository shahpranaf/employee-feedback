import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { data } from "../../../data";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  formModel = {
    email: "",
    password: ""
  };
  users;
  constructor(private router: Router) {}

  ngOnInit() {
    this.users = data.users;
  }

  onSubmit(form) {
    if (form.submitted) {
      /* checking login via service */
      const isvalidUser = data.users.filter(user => user.email === this.formModel.email);
      if (isvalidUser.length) {
        this.router.navigate(["/home/" + isvalidUser[0].id]);
      } else {
        alert("username or password is incorrect !!!");
      }
    }
  }

  get diagnostic() {
    return JSON.stringify(this.formModel);
  }
}
