import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShowsComponent } from "./shows.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ShowsComponent", () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsComponent],
      imports: [SimpleComponentsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
