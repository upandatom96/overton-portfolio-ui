import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MediaComponent } from "./media.component";
import { SingingSamplesComponent } from "./singing-samples/singing-samples.component";
import { ProductionStillsComponent } from "./production-stills/production-stills.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("MediaComponent", () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent, SingingSamplesComponent, ProductionStillsComponent],
      imports: [SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
