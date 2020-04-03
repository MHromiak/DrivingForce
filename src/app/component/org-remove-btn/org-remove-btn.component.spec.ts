import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRemoveBtnComponent } from './org-remove-btn.component';

describe('OrgRemoveBtnComponent', () => {
  let component: OrgRemoveBtnComponent;
  let fixture: ComponentFixture<OrgRemoveBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgRemoveBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRemoveBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
