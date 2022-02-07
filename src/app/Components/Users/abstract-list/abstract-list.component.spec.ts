import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractListComponent } from './abstract-list.component';

describe('AbstractListComponent', () => {
  let component: AbstractListComponent;
  let fixture: ComponentFixture<AbstractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
