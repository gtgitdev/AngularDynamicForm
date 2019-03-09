import { TestBed } from '@angular/core/testing';

import { AdHocDocumentService } from './ad-hoc-document.service';

describe('AdHocDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdHocDocumentService = TestBed.get(AdHocDocumentService);
    expect(service).toBeTruthy();
  });
});
