import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVolunteerComponent } from './login-volunteer.component';

describe('LoginVolunteerComponent', () => {
  let component: LoginVolunteerComponent;
  let fixture: ComponentFixture<LoginVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
