import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterNav } from "src/app/models/Link.model";

import { faHome, faLock, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  public faHome = faHome;
  public faLock = faLock;
  public faEdit = faEdit;

  public showSidebar = true;
  public managementLinks: RouterNav[] = [
    {
      label: "Manage Home",
      routerLink: "home"
    },
    {
      label: "Manage Shows",
      routerLink: "shows"
    },
    {
      label: "Manage About",
      routerLink: "about"
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
  ) { }

  ngOnInit() {
  }

  public manageHome() {
    this.router.navigateByUrl("/admin/(manage:home)");
  }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

}
