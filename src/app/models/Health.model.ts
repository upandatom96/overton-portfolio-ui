import { HealthValues } from "src/app/enums/health-enums";

export interface HealthStatus {
  status: keyof typeof HealthValues;
}
