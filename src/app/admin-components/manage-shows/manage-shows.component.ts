import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/Show.model';
import { ManagementModeValues } from 'src/app/enums/mode-enums';

@Component({
  selector: 'app-manage-shows',
  templateUrl: './manage-shows.component.html',
  styleUrls: ['./manage-shows.component.scss']
})
export class ManageShowsComponent implements OnInit {
  public showList: Show[] = [
    {
      _id: "1",
      title: "The Wohlfahrt Haus Dinner Threatre",
      details: `Andrew will be heading to the Wohlfahrt Haus Dinner Theatre in Wytheville, VA ` +
        `to be a part of their holiday show "Hollywood Christmas"`,
      month: "December",
      year: 2018,
      past: false,
    },
    {
      _id: "2",
      title: "Woodstock Playhouse",
      details: "Spent the the summer at the Woodstock Playhouse, playing a variety of roles as part of their core company ",
      month: "July",
      year: 2018,
      past: true,
    },
    {
      _id: "3",
      title: "The Highwood Theatre",
      details: "Performed in SOON by Nick Blaemire at The Highwood Theatre ",
      month: "October",
      year: 2018,
      past: true,
    },
  ];
  public formItem: Show;

  public admin = true;
  public mode: ManagementModeValues = ManagementModeValues.OVERVIEW;

  public get overviewActive(): boolean {
    return this.mode === ManagementModeValues.OVERVIEW;
  }

  public get formActive(): boolean {
    return this.addActive || this.editActive;
  }

  public get addActive(): boolean {
    return this.mode === ManagementModeValues.ADD;
  }

  public get editActive(): boolean {
    return this.mode === ManagementModeValues.EDIT;
  }

  constructor() { }

  ngOnInit() {
  }

  public switchToAddMode(): void {
    this.mode = ManagementModeValues.ADD;
  }

  public switchToOverviewMode(): void {
    this.mode = ManagementModeValues.OVERVIEW;
  }

  public switchToEditMode(id: string): void {
    this.formItem = this.showList.find((show) => {
      return show._id === id;
    });
    this.mode = ManagementModeValues.EDIT;
  }

  public deleteShow(id: string): void {
    this.showList = this.showList.filter((show) => {
      return show._id = id;
    });
  }

}
