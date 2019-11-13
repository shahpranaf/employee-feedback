import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { data } from "../../../data";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
  name: string = "";
  type: string = "";
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const user = data.users.filter(user => user.id === params.id);

      if (user.length) {
        this.name = user[0].name;
        this.type = user[0].empType;
      } else {
        alert("User not found");
        this.router.navigate(["login"]);
      }
    });
  }
}
