import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminComponent } from "./admin.component";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NavHelperService } from "src/app/services/nav-helper.service";

describe("AdminComponent", () => {
  let component: AdminComponent;
  let navHelper: NavHelperService;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [SimpleComponentsModule, RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    navHelper = TestBed.get(NavHelperService);
    spyOn(navHelper, "toLogin").and.stub();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
