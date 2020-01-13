import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { getToken } from "../utilities/token-util";

@Injectable({
  providedIn: "root"
})
export class RestHelperService {
  private get bearerToken(): string {
    return `Bearer ${getToken()}`;
  }

  public get headers() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return {
      headers: headers,
    };
  }

  public get headersWithAuth() {
    const headers = new HttpHeaders()
        .set("Content-Type", "application/json")
        .set("Authorization", this.bearerToken);
    return {
      headers: headers,
    };
  }

  public buildRestUrl(controller): string {
    const remoteUrl = "https://overton-services-dev.herokuapp.com/";
    return remoteUrl + controller;
  }
}
