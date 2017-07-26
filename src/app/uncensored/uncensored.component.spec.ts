import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncensoredComponent } from './uncensored.component';

describe('UncensoredComponent', () => {
  let component: UncensoredComponent;
  let fixture: ComponentFixture<UncensoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncensoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncensoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
