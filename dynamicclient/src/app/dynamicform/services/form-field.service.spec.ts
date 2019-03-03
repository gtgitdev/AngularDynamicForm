import { TestBed } from '@angular/core/testing';

import { FormFieldService } from './form-field.service';

describe('FormFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormFieldService = TestBed.get(FormFieldService);
    expect(service).toBeTruthy();
  });
});
