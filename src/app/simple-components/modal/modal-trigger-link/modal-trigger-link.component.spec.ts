import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModalTriggerLinkComponent } from "./modal-trigger-link.component";

describe("ModalTriggerLinkComponent", () => {
  let component: ModalTriggerLinkComponent;
  let fixture: ComponentFixture<ModalTriggerLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTriggerLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTriggerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
