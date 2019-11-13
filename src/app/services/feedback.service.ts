import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FeedbackService {
  constructor() {}

  getFeedbacks() {
    return Observable.create(observer => {
      observer.next(JSON.parse(localStorage.getItem("feedbacks")) || []);
      observer.complete();
    });
  }

  deleteFeedback(index) {
    return Observable.create(observer => {
      let feedbacks: Array<Object> = JSON.parse(localStorage.getItem("feedbacks")) || [];
      if (feedbacks.length) {
        feedbacks.splice(index, 1);
        localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
        observer.next();
        observer.complete();
      } else {
        observer.error("Element not found");
      }
    });
  }
}
