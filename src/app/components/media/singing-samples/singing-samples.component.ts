import { Component, OnInit } from '@angular/core';
import { SingingSample } from 'src/app/models/SingingSample.model';

@Component({
  selector: 'app-singing-samples',
  templateUrl: './singing-samples.component.html',
  styleUrls: ['./singing-samples.component.scss']
})
export class SingingSamplesComponent implements OnInit {
  public singingSampleList: SingingSample[] = [
    {
      labels: [
        {
          title: "Try Me",
          byline: "She Loves Me",
        },
        {
          title: "Big News",
          byline: "Parade",
        },
      ],
      youtubeLink: "https://www.youtube.com/embed/e5v7bVIbELY",
    },
    {
      labels: [
        {
          title: "Santa Fe",
          byline: "Newsies",
        },
        {
          title: "Big News",
          byline: "Robber Bridegroom",
        },
      ],
      youtubeLink: "https://www.youtube.com/embed/BjYnZSc_lFg",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
