import { TestBed, inject } from '@angular/core/testing';

import { OrderEventService } from './orderevent.service';

describe('OrderEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderEventService]
    });
  });

  it('should be created', inject([OrderEventService], (service: OrderEventService) => {
    expect(service).toBeTruthy();
  }));
});
