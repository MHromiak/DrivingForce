import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCarouselComponent } from './org-carousel.component';

describe('OrgCarouselComponent', () => {
  let component: OrgCarouselComponent;
  let fixture: ComponentFixture<OrgCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
