import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/Credit.model';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  credits: Credit[] = [
    {
      title: "Happy Days",
      role: "Elvis Presley / Jumpy Malachi",
      theatre: "Round Barn Theatre",
      director: "David Craven"
    },
    {
      title: "La Cage Aux Folles",
      role: "Ensemble (u/s Albin)",
      theatre: "Woodstock Playhouse",
      director: "Andrew Greenwood"
    },
    {
      title: "Title",
      role: "Role",
      theatre: "Theatre",
      director: "Director"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
