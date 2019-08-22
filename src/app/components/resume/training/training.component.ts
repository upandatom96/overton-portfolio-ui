import { Component, OnInit } from "@angular/core";
import { Training } from "src/app/models/Training.model";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.scss"]
})
export class TrainingComponent implements OnInit {
  training: Training[] = [
    {
      title: "BFA Musical Theatre Degree",
      institution: "Drake University"
    },
    {
      title: "Performance Apprentice",
      institution: "Red Branch Theatre Company"
    },
    {
      title: "Acting",
      instructors: [
        "Brian McManamon",
        "Karla Kash",
        "Michael Cadman",
        "Jason Bohon",
        "Forrest McClendon"
      ]
    },
    {
      title: "Dance",
      instructors: ["Paula McArthur", "David Dorfman", "Derrick Yanfork"]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
