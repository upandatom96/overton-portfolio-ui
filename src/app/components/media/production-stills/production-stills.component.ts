import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-production-stills",
  templateUrl: "./production-stills.component.html",
  styleUrls: ["./production-stills.component.scss"]
})
export class ProductionStillsComponent implements OnInit {
  public productionStillList: string[] = [
    "https://unsplash.it/600.jpg?image=252",
    "https://unsplash.it/600.jpg?image=253",
    "https://unsplash.it/600.jpg?image=254",
    "https://unsplash.it/600.jpg?image=255",
    "https://unsplash.it/600.jpg?image=256",
    "https://unsplash.it/600.jpg?image=257",
    "https://unsplash.it/600.jpg?image=258",
    "https://unsplash.it/600.jpg?image=259",
  ];

  constructor() { }

  ngOnInit() {
  }

}
