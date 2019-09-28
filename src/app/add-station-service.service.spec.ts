import { TestBed } from '@angular/core/testing';

import { AddStationServiceService } from './add-station-service.service';

describe('AddStationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStationServiceService = TestBed.get(AddStationServiceService);
    expect(service).toBeTruthy();
  });
});
