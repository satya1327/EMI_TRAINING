import { TestBed } from '@angular/core/testing';

import { EditIdService } from './edit-id.service';

describe('EditIdService', () => {
  let service: EditIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
