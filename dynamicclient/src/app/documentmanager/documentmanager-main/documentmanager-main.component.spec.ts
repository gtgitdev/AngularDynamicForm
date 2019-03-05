import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentmanagerMainComponent } from './documentmanager-main.component';

describe('DocumentmanagerMainComponent', () => {
  let component: DocumentmanagerMainComponent;
  let fixture: ComponentFixture<DocumentmanagerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentmanagerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentmanagerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
