import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoredComponent } from './censored.component';

describe('CensoredComponent', () => {
  let component: CensoredComponent;
  let fixture: ComponentFixture<CensoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CensoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CensoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
