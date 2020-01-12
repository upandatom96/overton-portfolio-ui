import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";
import { HeaderComponent } from "./header/header.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ShowsComponent } from "./shows/shows.component";
import { QuillViewComponent } from '../quill-view/quill-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent, HeaderComponent, GalleryComponent, ShowsComponent, QuillViewComponent
      ],
      imports: [SimpleComponentsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
