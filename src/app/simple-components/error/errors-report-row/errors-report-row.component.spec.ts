import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ErrorsReportRowComponent } from "./errors-report-row.component";
import { ErrorsReportComponent } from "../errors-report/errors-report.component";

describe("ErrorsReportRowComponent", () => {
  let component: ErrorsReportRowComponent;
  let fixture: ComponentFixture<ErrorsReportRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsReportRowComponent, ErrorsReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsReportRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
