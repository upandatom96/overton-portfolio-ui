import { Component, OnInit } from "@angular/core";
import { faMicrophone, faFilm, faMusic, faPrint, faCamera } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
  public faMicrophone = faMicrophone;
  public faFilm = faFilm;
  public faMusic = faMusic;
  public faCamera = faCamera;
  public faPrint = faPrint;

  constructor() { }

  ngOnInit() {
  }

}
