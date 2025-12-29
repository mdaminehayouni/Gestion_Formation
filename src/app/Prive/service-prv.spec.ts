import { TestBed } from '@angular/core/testing';

import { ServicePrv } from './service-prv';

describe('ServicePrv', () => {
  let service: ServicePrv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePrv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
