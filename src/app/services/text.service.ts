import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHelperService } from './rest-helper.service';
import { Observable } from 'rxjs';
import { BooleanUtilities } from '../utilities/boolean.utilities';
import { TextResource } from '../models/TextResource.model';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private textResource: TextResource;

  public get textReady(): boolean {
    return !BooleanUtilities.isNullOrUndefined(this.textResource);
  }

  public get homeHeaderText(): string {
    return this.getTextForArea("HOME_TEXT");
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

  private getTextForArea(textArea: string) {
    if (!this.textReady) {
      return "loading...";
    }
    const matchingText = this.textResource.text.find((text) => {
      return text.areaName === textArea;
    });
    if (matchingText) {
      return matchingText.textContent;
    } else {
      return "Error loading text :(";
    }
  }
}
