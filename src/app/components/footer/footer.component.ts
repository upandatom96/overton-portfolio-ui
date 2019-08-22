import { Component, OnInit } from "@angular/core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public year = new Date().getFullYear();

  public faEnvelope = faEnvelope;
  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;
  public faInstagram = faInstagram;

  constructor() { }

  ngOnInit() {
  }

}
