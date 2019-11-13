import { FeedbackService } from "./../../services/feedback.service";
import { Component, OnInit, Input } from "@angular/core";
import { data } from "../../../data";

@Component({
  selector: "app-list-feedback",
  templateUrl: "./list-feedback.component.html",
  styleUrls: ["./list-feedback.component.less"]
})
export class ListFeedbackComponent implements OnInit {
  @Input()
  user;

  feedbackLists: [];
  projects = [];
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    data.projects.map(project => {
      this.projects[project["id"]] = project["name"];
    });

    this.feedbackService.getFeedbacks().subscribe(feedbacks => {
      if (this.user.empType === "manager") {
        this.feedbackLists = feedbacks;
      } else {
        this.feedbackLists = feedbacks.filter(feedback => feedback.empId === this.user.id);
      }
    });
  }

  deleteFeedback(index) {
    const rollbackList = this.feedbackLists;
    this.feedbackLists.splice(index, 1);
    this.feedbackService.deleteFeedback(index).subscribe(
      result => console.log("delete success"),
      err => {
        this.feedbackLists = rollbackList;
        console.error("Delete failed");
      }
    );
  }
}
