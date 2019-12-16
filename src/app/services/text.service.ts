import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHelperService } from './rest-helper.service';
import { Observable } from 'rxjs';
import { BooleanUtilities } from '../utilities/boolean.utilities';
import { TextResource, TextItem } from '../models/TextResource.model';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private textResource: TextResource;

  public get textReady(): boolean {
    return !BooleanUtilities.isNullOrUndefined(this.textResource);
  }

  public get textList(): TextItem[] {
    return this.textResource.text;
  }

  public get homeHeaderText(): string {
    return this.getTextForArea("HOME_TEXT", false);
  }

  public get aboutMeText(): string {
    return this.getTextForArea("ABOUT_TEXT", false);
  }

  public get hasFacebookLink(): boolean {
    return this.facebookLink !== null;
  }

  public get facebookLink(): string {
    return this.getTextForArea("FACEBOOK_LINK", true);
  }

  public get hasTwitterLink(): boolean {
    return this.twitterLink !== null;
  }

  public get twitterLink(): string {
    return this.getTextForArea("TWITTER_LINK", true);
  }

  public get hasYoutubeLink(): boolean {
    return this.youtubeLink !== null;
  }

  public get youtubeLink(): string {
    return this.getTextForArea("YOUTUBE_LINK", true);
  }

  public get hasInstagramLink(): boolean {
    return this.instagramLink !== null;
  }

  public get instagramLink(): string {
    return this.getTextForArea("INSTAGRAM_LINK", true);
  }

  public get hasEmailAddress(): boolean {
    return this.emailAddress !== null;
  }

  public get emailAddress(): string {
    return this.getTextForArea("EMAIL_ADDRESS", true);
  }

  constructor(
    private http: HttpClient,
    private restHelperService: RestHelperService,
  ) { }

  public loadText(): void {
    this.textResource = null;
    this.retrieveText()
      .subscribe((res) => this.textResource = res,
        (error) => {
          console.log("load text failed");
        });
  }

  public updateText(text: TextItem): Observable<any> {
    const url = this.restHelperService.buildRestUrl("text");
    return this.http.put(url, text, this.restHelperService.headersWithAuth) as Observable<any>;
  }

  private retrieveText(): Observable<any> {
    const url = this.restHelperService.buildRestUrl("text");
    return this.http.get(url, this.restHelperService.headersWithAuth) as Observable<any>;
  }

  private getTextForArea(textArea: string, optional: boolean) {
    if (!this.textReady) {
      if (optional) {
        return null;
      } else {
        return "loading...";
      }
    }
    const matchingText = this.textResource.text.find((text) => {
      return text.areaName === textArea;
    });
    if (matchingText) {
      return matchingText.textContent;
    } else {
      if (optional) {
        return null;
      } else {
        return "Error loading text :(";
      }
    }
  }
}
