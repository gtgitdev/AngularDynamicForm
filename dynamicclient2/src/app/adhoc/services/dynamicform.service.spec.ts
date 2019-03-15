import { TestBed } from '@angular/core/testing';

import { DynamicformService } from './dynamicform.service';

describe('DynamicformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicformService = TestBed.get(DynamicformService);
    expect(service).toBeTruthy();
  });
});
