import { Component, OnInit } from "@angular/core";
import { Show } from "src/app/models/Show.model";
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
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

  public get showList(): Show[] {
    return this.showService.showList;
  }

  constructor(
    private showService: ShowService,
  ) { }

  ngOnInit() {
  }

  public buildFooter(show: Show): string {
    return `${show.month} ${show.year}`;
  }

}
