import { TestBed } from '@angular/core/testing';

import { GraphSeedService } from './graph-seed.service';

describe('GraphSeedService', () => {
  let service: GraphSeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphSeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
