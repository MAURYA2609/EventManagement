import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForAbstractInputComponent } from './call-for-abstract-input.component';

describe('CallForAbstractInputComponent', () => {
  let component: CallForAbstractInputComponent;
  let fixture: ComponentFixture<CallForAbstractInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForAbstractInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForAbstractInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
