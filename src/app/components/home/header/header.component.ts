import { Component, OnInit } from "@angular/core";
import { faMicrophone, faFilm, faMusic } from "@fortawesome/free-solid-svg-icons";
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent{
  public faFilm = faFilm;
  public faMicrophone = faMicrophone;
  public faMusic = faMusic;

  public get textReady(): boolean {
    return this.textService.textReady;
  }

  public get homeText(): string {
    return "hello";
  }

  constructor(
    private textService: TextService,
  ) { }

}
