import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
