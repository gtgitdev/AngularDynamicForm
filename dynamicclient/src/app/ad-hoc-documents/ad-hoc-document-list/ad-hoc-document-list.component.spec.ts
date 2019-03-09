import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocDocumentListComponent } from './ad-hoc-document-list.component';

describe('AdHocDocumentList', () => {
  let component: AdHocDocumentListComponent;
  let fixture: ComponentFixture<AdHocDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHocDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
