import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { RestHelperService } from "./rest-helper.service";
import { TokenResponse } from "../models/AuthRes.model";
import { removeToken, saveToken, isLoggedOn } from "../utilities/token-util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private restHelperService: RestHelperService,
  ) { }

  public login(user): Observable<boolean> {
    const url = this.restHelperService.buildRestUrl("auth/login");

    return this.http.post(url, user, this.restHelperService.headers)
      .pipe(
        map((res) => {
          const tokenResponse = res as TokenResponse;
          saveToken(tokenResponse.token);
          return isLoggedOn();
        })
      );
  }

  // TODO check
  public logout(): void {
    removeToken();
  }
}
