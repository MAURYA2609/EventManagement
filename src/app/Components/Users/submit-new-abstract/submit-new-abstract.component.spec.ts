import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNewAbstractComponent } from './submit-new-abstract.component';

describe('SubmitNewAbstractComponent', () => {
  let component: SubmitNewAbstractComponent;
  let fixture: ComponentFixture<SubmitNewAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitNewAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNewAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
