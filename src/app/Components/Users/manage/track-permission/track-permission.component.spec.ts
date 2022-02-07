import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPermissionComponent } from './track-permission.component';

describe('TrackPermissionComponent', () => {
  let component: TrackPermissionComponent;
  let fixture: ComponentFixture<TrackPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
