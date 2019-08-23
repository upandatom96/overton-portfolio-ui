import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingSamplesComponent } from './singing-samples.component';

describe('SingingSamplesComponent', () => {
  let component: SingingSamplesComponent;
  let fixture: ComponentFixture<SingingSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingingSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
