import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternSnapshotsComponent } from './western-snapshots.component';

describe('WesternSnapshotsComponent', () => {
  let component: WesternSnapshotsComponent;
  let fixture: ComponentFixture<WesternSnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternSnapshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternSnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
