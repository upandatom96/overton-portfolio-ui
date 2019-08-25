import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VanillaListItemComponent } from "./vanilla-list-item.component";

describe("VanillaListItemComponent", () => {
  let component: VanillaListItemComponent;
  let fixture: ComponentFixture<VanillaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VanillaListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
