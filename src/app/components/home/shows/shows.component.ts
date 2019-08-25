import { Component, OnInit } from "@angular/core";
import { Show } from "src/app/models/Show.model";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  private showList: Show[] = [
    {
      title: "The Wohlfahrt Haus Dinner Threatre",
      details: `Andrew will be heading to the Wohlfahrt Haus Dinner Theatre in Wytheville, VA ` +
        `to be a part of their holiday show "Hollywood Christmas"`,
      month: "December",
      year: 2018,
      past: false,
    },
    {
      title: "Woodstock Playhouse",
      details: "Spent the the summer at the Woodstock Playhouse, playing a variety of roles as part of their core company ",
      month: "July",
      year: 2018,
      past: true,
    },
    {
      title: "The Highwood Theatre",
      details: "Performed in SOON by Nick Blaemire at The Highwood Theatre ",
      month: "October",
      year: 2018,
      past: true,
    },
  ];

  public get pastShows(): Show[] {
    return this.showList.filter((show) => {
      return show.past;
    });
  }

  public get upcomingShows(): Show[] {
    return this.showList.filter((show) => {
      return !show.past;
    });
  }

  constructor() { }

  ngOnInit() {
  }

  public buildFooter(show: Show): string {
    return `${show.month} ${show.year}`;
  }

}
