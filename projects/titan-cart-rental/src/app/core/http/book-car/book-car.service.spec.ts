import { TestBed } from '@angular/core/testing';

import { BookCarService } from './book-car.service';

describe('RentCartService', () => {
  let service: BookCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
