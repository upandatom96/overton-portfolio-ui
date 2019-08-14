import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ErrorsReportComponent } from "./errors-report.component";

describe("ErrorsReportComponent", () => {
  let component: ErrorsReportComponent;
  let fixture: ComponentFixture<ErrorsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
