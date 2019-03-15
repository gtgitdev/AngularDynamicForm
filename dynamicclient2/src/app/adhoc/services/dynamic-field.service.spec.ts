import { TestBed } from '@angular/core/testing';

import { DynamicFieldService } from './dynamic-field.service';

describe('DynamicformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFieldService = TestBed.get(DynamicFieldService);
    expect(service).toBeTruthy();
  });
});
