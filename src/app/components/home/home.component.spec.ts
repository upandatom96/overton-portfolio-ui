import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";
import { HeaderComponent } from "./header/header.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ShowsComponent } from "./shows/shows.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, GalleryComponent, ShowsComponent],
      imports: [SimpleComponentsModule]
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
