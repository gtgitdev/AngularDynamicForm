import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocListComponent } from './ad-hoc-list.component';

describe('AdHocListComponent', () => {
  let component: AdHocListComponent;
  let fixture: ComponentFixture<AdHocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
