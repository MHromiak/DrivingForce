import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStepperComponent } from './org-stepper.component';

describe('OrgStepperComponent', () => {
  let component: OrgStepperComponent;
  let fixture: ComponentFixture<OrgStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
