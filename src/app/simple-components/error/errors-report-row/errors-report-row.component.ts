import { Component, Input } from "@angular/core";

@Component({
  selector: "app-errors-report-row",
  templateUrl: "./errors-report-row.component.html",
  styleUrls: ["./errors-report-row.component.scss"]
})
export class ErrorsReportRowComponent {
  @Input() public errors: String[] = [];
  @Input() public showErrors = true;
}
