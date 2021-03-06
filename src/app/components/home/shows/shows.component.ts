import { Component, OnInit } from "@angular/core";
import { Show } from "src/app/models/Show.model";
import { ShowService } from "src/app/services/show.service";
import { ShowStatusValues } from "src/app/enums/show-status-enums";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  public get ready(): boolean {
    return this.showService.showList !== null;
  }

  public get pastShows(): Show[] {
    return this.showList.filter((show) => {
      return show.showStatus === ShowStatusValues.past;
    });
  }

  public get upcomingShows(): Show[] {
    return this.showList.filter((show) => {
      return show.showStatus === ShowStatusValues.upcoming;
    });
  }

  public get showList(): Show[] {
    return this.showService.showList;
  }

  constructor(
    private showService: ShowService,
  ) { }

  ngOnInit() {
    this.showService.loadShows();
  }

  public buildFooter(show: Show): string {
    return `${show.month} ${show.year}`;
  }

}
