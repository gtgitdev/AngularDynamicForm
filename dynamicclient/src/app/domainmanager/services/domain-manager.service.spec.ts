import { TestBed } from '@angular/core/testing';

import { DomainManagerService } from './domain-manager.service';

describe('DomainManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomainManagerService = TestBed.get(DomainManagerService);
    expect(service).toBeTruthy();
  });
});
