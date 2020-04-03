import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerApplyBtnComponent } from './volunteer-apply-btn.component';

describe('VolunteerApplyBtnComponent', () => {
  let component: VolunteerApplyBtnComponent;
  let fixture: ComponentFixture<VolunteerApplyBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerApplyBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerApplyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
