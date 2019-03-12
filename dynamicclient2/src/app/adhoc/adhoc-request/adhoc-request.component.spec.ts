import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocRequestComponent } from './adhoc-request.component';

describe('AdhocRequestComponent', () => {
  let component: AdhocRequestComponent;
  let fixture: ComponentFixture<AdhocRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhocRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
