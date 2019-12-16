import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHelperService } from './rest-helper.service';
import { Observable } from 'rxjs';
import { BooleanUtilities } from '../utilities/boolean.utilities';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private textResource;

  public get textReady(): boolean {
    return !BooleanUtilities.isNullOrUndefined(this.textResource);
  }

  constructor(
    private http: HttpClient,
    private restHelperService: RestHelperService,
  ) { }

  public loadText(): void {
    this.retrieveText()
      .subscribe((res) => this.textResource = res,
        (error) => {
          console.log("load text failed");
        });
  }

  private retrieveText(): Observable<any> {
    const url = this.restHelperService.buildRestUrl("text");
    return this.http.get(url, this.restHelperService.headersWithAuth) as Observable<any>;
  }
}
