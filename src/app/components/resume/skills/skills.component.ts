import { Component, OnInit } from "@angular/core";
import { Skill } from "src/app/models/Skill.model";
import { Training } from "src/app/models/Training.model";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  skillList: Skill[] = [
    { title: "Vocal runs" },
    { title: "Puppeteering" },
    { title: "Burping the alphabet" },
    { title: "Cartwheel" },
    { title: "High mix" },
    {
      title: "Standard Dialects:",
      details: ["Cockney", "Irish", "RP", "Southern", "Brooklyn"]
    }
  ];

  trainingList: Training[] = [
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
