import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResumeComponent } from "./resume.component";
import { SkillsComponent } from "./skills/skills.component";
import { CreditsComponent } from "./credits/credits.component";
import { TrainingComponent } from "./training/training.component";

describe("ResumeComponent", () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent, SkillsComponent, CreditsComponent, TrainingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
