import { Component, Input } from "@angular/core";

@Component({
  selector: "app-errors-report",
  templateUrl: "./errors-report.component.html",
  styleUrls: ["./errors-report.component.scss"]
})
export class ErrorsReportComponent {
  @Input() errors: String[] = [];

  public get hasError(): boolean {
    return this.errors.length > 0;
  }
}
