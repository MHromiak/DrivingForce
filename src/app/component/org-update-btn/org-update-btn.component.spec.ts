import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUpdateBtnComponent } from './org-update-btn.component';

describe('OrgUpdateBtnComponent', () => {
  let component: OrgUpdateBtnComponent;
  let fixture: ComponentFixture<OrgUpdateBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgUpdateBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUpdateBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
