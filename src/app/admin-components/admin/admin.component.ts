import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterNav } from "src/app/models/Link.model";

import { faHome, faLock, faEdit } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent {
  public faHome = faHome;
  public faLock = faLock;
  public faEdit = faEdit;

  public showSidebar = true;
  public managementLinks: RouterNav[] = [
    {
      label: "Manage Text",
      routerLink: "text"
    },
    {
      label: "Manage Shows",
      routerLink: "shows"
    },
    // {
    //   label: "Manage Resume",
    //   routerLink: "resume"
    // },
    // {
    //   label: "Manage Media",
    //   routerLink: "media"
    // },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
