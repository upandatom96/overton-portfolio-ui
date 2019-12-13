import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestHelperService } from './rest-helper.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private restHelperService: RestHelperService,
    private http: HttpClient,
  ) { }

  public resetPassword(email: string): Observable<any> {
    const url = this.restHelperService.buildRestUrl("user/passwordReset");

    return this.http.put(url, { email: email }, this.restHelperService.headersWithAuth) as Observable<any>;
  }
}
