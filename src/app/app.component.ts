import { Component, OnInit } from "@angular/core";

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { TextService } from './services/text.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "overton-portfolio";
  faLock = faLock;

  constructor(
    private textService: TextService,
  ) { }

  public ngOnInit() {
    this.textService.loadText();
  }
}
