import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncenseredSnapshotsComponent } from './uncensered-snapshots.component';

describe('UncenseredSnapshotsComponent', () => {
  let component: UncenseredSnapshotsComponent;
  let fixture: ComponentFixture<UncenseredSnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncenseredSnapshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncenseredSnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
