import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuillDefaultComponent } from "./quill-default.component";
import { FormsModule } from "@angular/forms";
import { QuillModule } from "ngx-quill";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("QuillDefaultComponent", () => {
  let component: QuillDefaultComponent;
  let fixture: ComponentFixture<QuillDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuillDefaultComponent],
      imports: [FormsModule, QuillModule.forRoot(), SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
