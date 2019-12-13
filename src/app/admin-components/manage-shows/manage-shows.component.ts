import { Component, OnInit } from "@angular/core";
import { Show } from "src/app/models/Show.model";
import { ManagementModeValues } from "src/app/enums/mode-enums";
import { BooleanUtilities } from "src/app/utilities/boolean.utilities";
import { ShowService } from "src/app/services/show.service";
import { ShowStatusValues } from "src/app/enums/show-status-enums";

@Component({
  selector: "app-manage-shows",
  templateUrl: "./manage-shows.component.html",
  styleUrls: ["./manage-shows.component.scss"]
})
export class ManageShowsComponent implements OnInit {
  public formItem: Show;
  public showErrors = false;

  public admin = true;
  public mode: ManagementModeValues = ManagementModeValues.OVERVIEW;

  public get overviewReady(): boolean {
    return true;
  }

  public get formReady(): boolean {
    return true;
  }

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

  public get titleError(): boolean {
    return !BooleanUtilities.hasValue(this.formItem.title);
  }

  public get detailsError(): boolean {
    return !BooleanUtilities.hasValue(this.formItem.details);
  }

  public get yearError(): boolean {
    return !BooleanUtilities.hasValue(this.formItem.year);
  }

  public get errors(): String[] {
    const errors: String[] = [];
    if (this.titleError) {
      errors.push("Please add a title.");
    }
    if (this.detailsError) {
      errors.push("Please add details.");
    }
    if (this.yearError) {
      errors.push("Please add a year.");
    }
    return errors;
  }

  private get valid(): boolean {
    return this.errors.length === 0;
  }

  public get showList(): Show[] {
    return this.showService.showList;
  }

  public set showList(showList: Show[]) {
    this.showService.showList = showList;
  }

  constructor(
    private showService: ShowService,
  ) { }

  public ngOnInit() {
    this.showService.loadShows();
  }

  public switchToOverviewMode(): void {
    this.showErrors = false;
    this.mode = ManagementModeValues.OVERVIEW;
  }

  public switchToAddMode(): void {
    this.showErrors = false;
    this.formItem = {
      title: "",
      details: "",
      month: "January",
      year: 2019,
      showStatus: ShowStatusValues.upcoming,
    };
    this.mode = ManagementModeValues.ADD;
  }

  public switchToEditMode(id: string): void {
    this.showErrors = false;
    const focusItem = this.showList.find((show) => {
      return show._id === id;
    });
    this.formItem = {
      _id: focusItem._id,
      title: focusItem.title,
      details: focusItem.details,
      month: focusItem.month,
      year: focusItem.year,
      showStatus: focusItem.showStatus,
    };
    this.mode = ManagementModeValues.EDIT;
  }

  public deleteShow(id: string): void {
    let response;
    this.showService.deleteShow(id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("delete show failed");
        },
        () => {
          this.showService.loadShows();
        });
  }

  public submit(): void {
    this.showErrors = true;
    if (this.valid) {
      if (this.addActive) {
        this.submitAdd();
      } else {
        this.submitEdit();
      }
    }
  }

  private submitAdd(): void {
    let response;
    this.showService.createShow(this.formItem)
      .subscribe((res) => response = res,
        (error) => {
          console.log("add show failed");
        },
        () => {
          this.concludeSubmit();
        });
  }

  private submitEdit(): void {
    let response;
    this.showService.updateShow(this.formItem)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update show failed");
        },
        () => {
          this.concludeSubmit();
        });
  }

  private concludeSubmit(): void {
    this.formItem = {
      title: "",
      details: "",
      month: "January",
      year: 2019,
      showStatus: ShowStatusValues.upcoming,
    };
    this.showErrors = false;
    this.showService.loadShows();
    this.switchToOverviewMode();
  }

}
