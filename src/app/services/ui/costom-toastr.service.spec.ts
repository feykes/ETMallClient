import { TestBed } from '@angular/core/testing';

import { CostomToastrService } from './costom-toastr.service';

describe('CostomToastrService', () => {
  let service: CostomToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostomToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
