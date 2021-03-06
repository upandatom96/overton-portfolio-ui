import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectMultipleComponent } from "./select-multiple.component";

describe("SelectMultipleComponent", () => {
  let component: SelectMultipleComponent;
  let fixture: ComponentFixture<SelectMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMultipleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("nothingInFocus", () => {
    it("should return true if no focused option", () => {
      component.focusedOption = undefined;

      expect(component.nothingInFocus).toBeTruthy();
    });
    it("should return false if there is a focused option", () => {
      component.focusedOption = { value: true };

      expect(component.nothingInFocus).toBeFalsy();
    });
  });
});
