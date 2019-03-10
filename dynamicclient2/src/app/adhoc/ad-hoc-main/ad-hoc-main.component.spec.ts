import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocMainComponent } from './ad-hoc-main.component';

describe('AdHocMainComponent', () => {
  let component: AdHocMainComponent;
  let fixture: ComponentFixture<AdHocMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHocMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
