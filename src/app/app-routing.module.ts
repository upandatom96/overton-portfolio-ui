import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";
import { AboutComponent } from "./components/about/about.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { MediaComponent } from "./components/media/media.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./admin-components/admin/admin.component";
import { MenuComponent } from "./admin-components/menu/menu.component";
import { ManageResumeComponent } from "./admin-components/manage-resume/manage-resume.component";
import { ManageMediaComponent } from "./admin-components/manage-media/manage-media.component";
import { ManageShowsComponent } from "./admin-components/manage-shows/manage-shows.component";
import { ManageTextComponent } from './admin-components/manage-text/manage-text.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "info", component: InfoComponent },
  { path: "about", component: AboutComponent },
  // { path: "resume", component: ResumeComponent },
  // { path: "media", component: MediaComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: MenuComponent, outlet: "manage" },
      // { path: "resume", component: ManageResumeComponent, outlet: "manage" },
      // { path: "media", component: ManageMediaComponent, outlet: "manage" },
      { path: "shows", component: ManageShowsComponent, outlet: "manage" },
      { path: "text", component: ManageTextComponent, outlet: "manage" },
    ],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
