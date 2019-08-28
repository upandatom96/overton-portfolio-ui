import { Injectable } from '@angular/core';
import { Show } from '../models/Show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  public showList: Show[] = [
    {
      _id: "1",
      title: "The Wohlfahrt Haus Dinner Threatre",
      details: `Andrew will be heading to the Wohlfahrt Haus Dinner Theatre in Wytheville, VA ` +
        `to be a part of their holiday show "Hollywood Christmas"`,
      month: "December",
      year: 2018,
      past: false,
    },
    {
      _id: "2",
      title: "Woodstock Playhouse",
      details: "Spent the the summer at the Woodstock Playhouse, playing a variety of roles as part of their core company ",
      month: "July",
      year: 2018,
      past: true,
    },
    {
      _id: "3",
      title: "The Highwood Theatre",
      details: "Performed in SOON by Nick Blaemire at The Highwood Theatre ",
      month: "October",
      year: 2018,
      past: true,
    },
  ];

  constructor() { }
}
