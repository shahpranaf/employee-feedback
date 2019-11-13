import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "home",
    children: [{ path: ":id", component: HomepageComponent }, { path: "", component: HomepageComponent }]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
