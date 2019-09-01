import { Component, OnInit } from "@angular/core";
import { SingingSample } from "src/app/models/SingingSample.model";

@Component({
  selector: "app-singing-samples",
  templateUrl: "./singing-samples.component.html",
  styleUrls: ["./singing-samples.component.scss"]
})
export class SingingSamplesComponent implements OnInit {
  public singingSampleList: SingingSample[] = [
    {
      title: "Try Me & Big News",
      labels: [
        "Try Me - She Loves Me",
        "Big News - Parade"
      ],
      youtubeLink: "https://www.youtube.com/embed/e5v7bVIbELY",
    },
    {
      title: "Santa Fe & Big News",
      labels: [
        "Santa Fe - Newsies",
        "Big News - Robber Bridegroom",
      ],
      youtubeLink: "https://www.youtube.com/embed/BjYnZSc_lFg",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
