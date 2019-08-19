import { Injectable } from "@angular/core";
import { RestUtilities } from "../utilities/rest.utilities";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HealthStatus } from "../models/Health.model";

@Injectable({
  providedIn: "root"
})
export class HealthService {

  constructor(
    private http: HttpClient,
  ) { }

  public getHealthStatus(): Observable<HealthStatus> {
    const url = RestUtilities.buildRestUrl();

    return this.http.get(url) as Observable<HealthStatus>;
  }
}
