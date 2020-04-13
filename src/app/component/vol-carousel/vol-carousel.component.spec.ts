import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolCarouselComponent } from './vol-carousel.component';

describe('VolCarouselComponent', () => {
  let component: VolCarouselComponent;
  let fixture: ComponentFixture<VolCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
