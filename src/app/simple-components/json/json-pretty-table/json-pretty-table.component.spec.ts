import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JsonPrettyTableComponent } from "./json-pretty-table.component";

describe("JsonPrettyTableComponent", () => {
  let component: JsonPrettyTableComponent;
  let fixture: ComponentFixture<JsonPrettyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrettyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrettyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
