import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerStepperComponent } from './volunteer-stepper.component';

describe('VolunteerStepperComponent', () => {
  let component: VolunteerStepperComponent;
  let fixture: ComponentFixture<VolunteerStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
