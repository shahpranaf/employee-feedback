import { Component, OnInit, Input } from "@angular/core";
import { data } from "../../../data";
import { NgbRating } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, Validators } from "@angular/forms";

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
    empId: "",
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
    this.feedbackModel.empId = this.user.id || "ee";
    this.feedbackModel.empName = this.user.name;
    console.log(JSON.stringify(this.user));
  }

  onSubmit(form) {
    if (form.submitted && !form.invalid) {
      const feedBacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

      feedBacks.push(this.feedbackModel);

      localStorage.setItem("feedbacks", JSON.stringify(feedBacks));

      this.feedbackModel = {
        ...this.feedbackModel,
        project: "",
        ratings: "",
        comments: ""
      };

      alert("Feedback submitted successfully!!");
    }
  }
}
