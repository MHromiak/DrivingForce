import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDirectionBtnComponent } from './volunteer-direction-btn.component';

describe('VolunteerDirectionBtnComponent', () => {
  let component: VolunteerDirectionBtnComponent;
  let fixture: ComponentFixture<VolunteerDirectionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDirectionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDirectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
