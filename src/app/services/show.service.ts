import { Injectable } from "@angular/core";
import { Show, ShowResource } from "../models/Show.model";
import { HttpClient } from '@angular/common/http';
import { RestUtilities } from '../utilities/rest.utilities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ShowService {
  public showList: Show[] = null;

  constructor(
    private http: HttpClient,
  ) { }

  public loadShows(): void {
    this.showList = null;
    this.retrieveShows()
      .subscribe((res) => this.showList = res.shows,
        (error) => {
          console.log("get all shows failed");
        });
  }

  private retrieveShows() {
    const url = RestUtilities.buildUrl("show");
    return this.http.get(url) as Observable<ShowResource>;
  }

  public createShow(show: Show) {
    const url = RestUtilities.buildUrl("show");
    return this.http.post(url, show) as Observable<ShowResource>;
  }
}
