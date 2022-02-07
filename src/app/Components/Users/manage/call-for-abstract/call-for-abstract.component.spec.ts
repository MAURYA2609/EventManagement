import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForAbstractComponent } from './call-for-abstract.component';

describe('CallForAbstractComponent', () => {
  let component: CallForAbstractComponent;
  let fixture: ComponentFixture<CallForAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
