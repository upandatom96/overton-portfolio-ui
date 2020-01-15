import { Component, OnInit } from "@angular/core";

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { TextService } from "./services/text.service";
import { RestHelperService } from './services/rest-helper.service';

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
    private restHelper: RestHelperService,
  ) { }

  public ngOnInit() {
    const envUrl = this.restHelper.baseServiceUrl;
    console.log(envUrl);
    this.textService.loadText();
  }
}
