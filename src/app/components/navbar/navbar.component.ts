import { Component } from "@angular/core";
import { Link } from "src/app/models/Link.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  links: Link[] = [
    {
      text: "Home",
      routerLink: "/"
    },
    {
      text: "Info",
      routerLink: "/info"
    },
    {
      text: "Callanan Concepts",
      href: "http://callananconcepts.club/home"
    }
  ];
}
