import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenseredSnapshotsComponent } from './censered-snapshots.component';

describe('CenseredSnapshotsComponent', () => {
  let component: CenseredSnapshotsComponent;
  let fixture: ComponentFixture<CenseredSnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenseredSnapshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenseredSnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
