import { Component, OnInit } from '@angular/core';
import { faMicrophone, faFilm, faMusic } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faFilm = faFilm;
  public faMicrophone = faMicrophone;
  public faMusic = faMusic;

  constructor() { }

  ngOnInit() {
  }

}
