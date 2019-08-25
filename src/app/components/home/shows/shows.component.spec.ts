import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShowsComponent } from "./shows.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("ShowsComponent", () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsComponent],
      imports: [SimpleComponentsModule]
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
