import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { getToken } from "../utilities/token-util";
import { TEST_UI_URL, PROD_UI_URL, TEST_SERVICE_URL, PROD_SERVICE_URL } from '../constants/rest-constants';

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

  public get baseServiceUrl(): string {
    const url = window.location.href;
    if (url.includes(TEST_UI_URL)) {
      return TEST_SERVICE_URL;
    } else if (url.includes(PROD_UI_URL)) {
      return PROD_SERVICE_URL;
    } else {
      return TEST_SERVICE_URL;
    }
  }

  constructor(
    private http: HttpClient
  ) { }

  public buildRestUrl(controller): string {
    const remoteUrl = "https://overton-services-dev.herokuapp.com/";
    return remoteUrl + controller;
  }
}
