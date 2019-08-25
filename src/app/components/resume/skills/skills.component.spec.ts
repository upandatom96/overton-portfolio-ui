import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SkillsComponent } from "./skills.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("SkillsComponent", () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      imports: [SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
