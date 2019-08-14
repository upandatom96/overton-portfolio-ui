import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { BooleanUtilities } from 'src/app/utilities/boolean.utilities';

@Component({
  selector: "app-select-multiple",
  templateUrl: "./select-multiple.component.html",
  styleUrls: ["./select-multiple.component.scss"]
})
export class SelectMultipleComponent {
  @Input() public availableOptions: any[] = [];
  @Input() public selectedOptions: any[] = [];
  @Input() public textField = "title";
  @Input() public valueField = "_id";
  @Input() private sortAlphabetically = true;
  @Output() public refreshData = new EventEmitter();

  public focusedOption: any;

  public get nothingInFocus(): boolean {
    return BooleanUtilities.isUndefined(this.focusedOption);
  }

  public get showDropdown(): boolean {
    return BooleanUtilities.notUndefined(this.optionsForDisplay) && this.optionsForDisplay.length > 0;
  }

  public get showList(): boolean {
    return BooleanUtilities.notUndefined(this.selectedOptions) && this.selectedOptions.length > 0;
  }

  public get optionsForDisplay(): any[] {
    if (BooleanUtilities.notUndefined(this.availableOptions)) {
      this.availableOptions = this.availableOptions.filter((option) => {
        return !this.selectedValues.includes(option[this.valueField]);
      });
    }
    if (!this.sortAlphabetically) {
      return this.availableOptions;
    }
    this.availableOptions.sort((a, b) => {
      const textA = a[this.textField].toUpperCase();
      const textB = b[this.textField].toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

  private get selectedValues(): any[] {
    const selectedValues: any[] = [];
    this.selectedOptions.forEach((option) => {
      selectedValues.push(option[this.valueField]);
    });
    return selectedValues;
  }


  public removeSelectedOption(optToRemove: any): void {
    this.selectedOptions = this.selectedOptions.filter((opt) => {
      return opt[this.valueField] !== optToRemove[this.valueField];
    });
    this.emitRefreshData();
  }

  public updateFocusedOption(valueToSelect: any): void {
    if (BooleanUtilities.notUndefined(valueToSelect)) {
      const selectOpt = this.availableOptions.find((option) => {
        return option[this.valueField] === valueToSelect;
      });
      this.focusedOption = selectOpt;
    }
  }

  public selectFocusedOption(): void {
    this.selectedOptions.push(this.focusedOption);
    this.focusedOption = undefined;
    this.emitRefreshData();
  }

  private emitRefreshData(): void {
    this.refreshData.emit("");
  }

}
