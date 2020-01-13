import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutComponent } from "./about.component";
import { LoadingComponent } from "src/app/simple-components/loading/loading.component";
import { QuillViewComponent } from "../quill-view/quill-view.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent, LoadingComponent, QuillViewComponent, FaIconComponent,
      ],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
