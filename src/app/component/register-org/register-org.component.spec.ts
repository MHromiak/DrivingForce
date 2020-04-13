import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrgComponent } from './register-org.component';

describe('RegisterOrgComponent', () => {
  let component: RegisterOrgComponent;
  let fixture: ComponentFixture<RegisterOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
