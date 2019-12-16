import { Component } from "@angular/core";
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {

  public get textReady(): boolean {
    return this.textService.textReady;
  }

  public get aboutMeText(): string {
    return this.textService.aboutMeText;
  }

  constructor(
    private textService: TextService,
  ) { }

}
