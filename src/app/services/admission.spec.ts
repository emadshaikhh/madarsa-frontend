import { TestBed } from '@angular/core/testing';

import { Admission } from './admission';

describe('Admission', () => {
  let service: Admission;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Admission);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
