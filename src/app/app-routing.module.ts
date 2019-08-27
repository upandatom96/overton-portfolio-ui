import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";
import { AboutComponent } from "./components/about/about.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { MediaComponent } from "./components/media/media.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./admin-components/admin/admin.component";
import { AdminHomeMenuComponent } from './admin-components/home/admin-home-menu/admin-home-menu.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "info", component: InfoComponent },
  { path: "about", component: AboutComponent },
  { path: "resume", component: ResumeComponent },
  { path: "media", component: MediaComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin-home-menu", component: AdminHomeMenuComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
