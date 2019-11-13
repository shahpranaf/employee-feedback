import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { ListFeedbackComponent } from "./components/list-feedback/list-feedback.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    PageNotFoundComponent,
    FeedbackComponent,
    ListFeedbackComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [NgbRatingConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
  }
}
