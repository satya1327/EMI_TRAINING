import { TestBed } from '@angular/core/testing';

import { DetailsidService } from './detailsid.service';

describe('DetailsidService', () => {
  let service: DetailsidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
