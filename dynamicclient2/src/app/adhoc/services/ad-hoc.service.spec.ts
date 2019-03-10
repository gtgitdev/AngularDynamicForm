import { TestBed } from '@angular/core/testing';

import { AdHocService } from './ad-hoc.service';

describe('AdHocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdHocService = TestBed.get(AdHocService);
    expect(service).toBeTruthy();
  });
});
