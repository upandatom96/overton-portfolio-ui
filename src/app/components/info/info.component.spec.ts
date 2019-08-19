import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { InfoComponent } from "./info.component";
import { HealthValues } from "src/app/enums/health-enums";
import { UnitTestUtilities } from "src/unit-testing/unit-test.utilities";

describe("InfoComponent", () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("showStatus", () => {
    it("should return true if healthStatus has value", () => {
      component.healthStatus = {
        status: HealthValues.UP,
      };

      expect(component.showStatus).toBeTruthy();
    });
    it("should return false if healthStatus has no value", () => {
      component.healthStatus = null;

      expect(component.showStatus).toBeFalsy();
    });
    it("should show status html if true", () => {
      component.healthStatus = {
        status: HealthValues.UP,
      };

      const statusHtml = UnitTestUtilities.getElementById(fixture, "status-row");

      expect(statusHtml).toBeTruthy();
    });
    it("should hide status html if false", () => {
      component.healthStatus = null;

      const statusHtml = UnitTestUtilities.getElementById(fixture, "status-row");

      expect(statusHtml).toBeFalsy();
    });
  });

  describe("isBackendOnline", () => {
    it("should return null if no healthStatus", () => {
      component.healthStatus = null;

      expect(component.isBackendOnline).toEqual(null);
    });
    it("should return true if healthStatus UP", () => {
      component.healthStatus = {
        status: HealthValues.UP,
      };

      expect(component.isBackendOnline).toBeTruthy();
    });
    it("should return true if healthStatus UP", () => {
      component.healthStatus = {
        status: HealthValues.DOWN,
      };

      expect(component.isBackendOnline).toBeFalsy();
    });
  });
});
