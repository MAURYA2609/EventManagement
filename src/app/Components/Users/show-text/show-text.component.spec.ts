import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTextComponent } from './show-text.component';

describe('ShowTextComponent', () => {
  let component: ShowTextComponent;
  let fixture: ComponentFixture<ShowTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
