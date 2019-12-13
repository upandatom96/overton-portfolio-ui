import { Injectable } from "@angular/core";
import { Show, ShowResource } from "../models/Show.model";
import { HttpClient } from '@angular/common/http';
import { RestUtilities } from '../utilities/rest.utilities';
import { Observable } from 'rxjs';
import { RestHelperService } from './rest-helper.service';

@Injectable({
  providedIn: "root"
})
export class ShowService {
  public showList: Show[] = null;

  constructor(
    private http: HttpClient,
    private restHelperService: RestHelperService,
  ) { }

  public loadShows(): void {
    this.showList = null;
    this.retrieveShows()
      .subscribe((res) => this.showList = res.shows,
        (error) => {
          console.log("get all shows failed");
        });
  }

  private retrieveShows(): Observable<ShowResource> {
    const url = RestUtilities.buildUrl("show");
    return this.http.get(url) as Observable<ShowResource>;
  }

  private retrieveShowById(showId: string): Observable<Show> {
    const url = RestUtilities.buildUrl(`show/${showId}`);
    return this.http.get(url) as Observable<Show>;
  }

  public createShow(show: Show): Observable<any> {
    const url = RestUtilities.buildUrl("show");
    return this.http.post(url, show, this.restHelperService.headersWithAuth) as Observable<any>;
  }

  public deleteShow(showId: string): Observable<any> {
    const url = RestUtilities.buildUrl(`show/${showId}`);
    return this.http.delete(url, this.restHelperService.headersWithAuth) as Observable<any>;
  }

  public updateShow(show: Show): Observable<any> {
    const url = RestUtilities.buildUrl("show");
    return this.http.put(url, show, this.restHelperService.headersWithAuth) as Observable<any>;
  }
}
