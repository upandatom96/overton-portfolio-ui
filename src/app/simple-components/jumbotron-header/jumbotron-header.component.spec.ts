import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JumbotronHeaderComponent } from "./jumbotron-header.component";

describe("JumbotronHeaderComponent", () => {
  let component: JumbotronHeaderComponent;
  let fixture: ComponentFixture<JumbotronHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
