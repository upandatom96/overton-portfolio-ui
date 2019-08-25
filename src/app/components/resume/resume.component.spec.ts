import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResumeComponent } from "./resume.component";
import { SkillsComponent } from "./skills/skills.component";
import { CreditsComponent } from "./credits/credits.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("ResumeComponent", () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent, SkillsComponent, CreditsComponent],
      imports: [SimpleComponentsModule]
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
