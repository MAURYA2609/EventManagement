import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractReviewComponent } from './abstract-review.component';

describe('AbstractReviewComponent', () => {
  let component: AbstractReviewComponent;
  let fixture: ComponentFixture<AbstractReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
