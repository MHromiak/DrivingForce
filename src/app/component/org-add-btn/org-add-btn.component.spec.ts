import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAddBtnComponent } from './org-add-btn.component';

describe('OrgAddBtnComponent', () => {
  let component: OrgAddBtnComponent;
  let fixture: ComponentFixture<OrgAddBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgAddBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAddBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
