import { TestBed } from '@angular/core/testing';

import { OutputGraphService } from './output-graph.service';

describe('OutputGraphService', () => {
  let service: OutputGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
