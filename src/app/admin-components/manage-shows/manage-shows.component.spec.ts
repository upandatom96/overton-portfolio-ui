import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageShowsComponent } from "./manage-shows.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ManageShowsComponent", () => {
  let component: ManageShowsComponent;
  let fixture: ComponentFixture<ManageShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageShowsComponent],
      imports: [SimpleComponentsModule, FormsModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
