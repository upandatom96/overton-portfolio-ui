import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SingingSamplesComponent } from "./singing-samples.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("SingingSamplesComponent", () => {
  let component: SingingSamplesComponent;
  let fixture: ComponentFixture<SingingSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingingSamplesComponent],
      imports: [SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
