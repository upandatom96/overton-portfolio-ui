import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeMenuComponent } from './admin-home-menu.component';

describe('AdminHomeMenuComponent', () => {
  let component: AdminHomeMenuComponent;
  let fixture: ComponentFixture<AdminHomeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
