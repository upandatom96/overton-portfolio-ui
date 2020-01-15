import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { getToken } from "../utilities/token-util";
import { TEST_UI_URL, PROD_UI_URL, TEST_SERVICE_URL, PROD_SERVICE_URL } from "../constants/rest-constants";

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

  private get currentUrl(): string {
    return window.location.href;
  }

  private get useProdServices(): boolean {
    return this.currentUrl.includes(PROD_UI_URL);
  }

  private get useTestServices(): boolean {
    return this.currentUrl.includes(TEST_UI_URL);
  }

  public get baseServiceUrl(): string {
    if (this.useTestServices) {
      return TEST_SERVICE_URL;
    } else if (this.useProdServices) {
      return PROD_SERVICE_URL;
    } else {
      return TEST_SERVICE_URL;
    }
  }

  public buildRestUrl(controller: string): string {
    return this.baseServiceUrl + controller;
  }
}
