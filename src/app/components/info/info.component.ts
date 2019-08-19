import { Component, OnInit } from "@angular/core";
import { HealthService } from "src/app/services/health.service";
import { HealthStatus } from "src/app/models/Health.model";
import { BooleanUtilities } from "src/app/utilities/boolean.utilities";
import { HealthValues } from "src/app/enums/health-enums";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  public healthStatus: HealthStatus;

  public get showStatus(): boolean {
    return (BooleanUtilities.hasValue(this.healthStatus));
  }

  public get isBackendOnline(): boolean {
    if (!BooleanUtilities.hasValue(this.healthStatus)) {
      return null;
    } else if (this.healthStatus.status === HealthValues.UP) {
      return true;
    } else if (this.healthStatus.status === HealthValues.DOWN) {
      return false;
    }
  }

  constructor(
    private healthService: HealthService,
  ) { }

  ngOnInit() {
    this.retrieveHealthStatus();
  }

  private retrieveHealthStatus(): void {
    this.healthService.getHealthStatus()
      .subscribe((res) => this.healthStatus = res,
        (error) => {
          this.healthStatus = {
            status: HealthValues.DOWN,
          };
          console.log(error);
        });
  }
}
