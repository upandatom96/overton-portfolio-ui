import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "info", component: InfoComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
