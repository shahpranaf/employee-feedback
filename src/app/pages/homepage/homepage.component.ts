import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { data } from "../../../data";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.less"]
})
export class HomepageComponent implements OnInit {
  user: Object = {};
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const user = data.users.filter(user => user.id === params.id);

      if (user.length) {
        this.user = user[0];
      }
    });
  }
}
