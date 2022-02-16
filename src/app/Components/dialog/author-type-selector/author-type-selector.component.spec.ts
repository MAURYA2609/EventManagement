import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTypeSelectorComponent } from './author-type-selector.component';

describe('AuthorTypeSelectorComponent', () => {
  let component: AuthorTypeSelectorComponent;
  let fixture: ComponentFixture<AuthorTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
