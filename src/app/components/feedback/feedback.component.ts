import { Component, OnInit, Input } from "@angular/core";
import { data } from "../../../data";
import { NgbRating } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.less"],
  providers: [NgbRating]
})
export class FeedbackComponent implements OnInit {
  @Input()
  user;

  feedbackModel = {
    empID: "",
    empName: "",
    project: "",
    ratings: "",
    comments: ""
  };
  projects;
  constructor() {
    this.projects = data.projects;
  }

  ngOnInit() {
    this.feedbackModel.empID = this.user.id;
    this.feedbackModel.empName = this.user.name;
    console.log(JSON.stringify(this.user));
  }
}
