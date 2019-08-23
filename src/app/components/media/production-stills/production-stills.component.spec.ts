import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductionStillsComponent } from "./production-stills.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("ProductionStillsComponent", () => {
  let component: ProductionStillsComponent;
  let fixture: ComponentFixture<ProductionStillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionStillsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionStillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
