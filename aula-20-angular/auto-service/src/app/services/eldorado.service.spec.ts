import { TestBed } from '@angular/core/testing';

import { EldoradoService } from './eldorado.service';

describe('EldoradoService', () => {
  let service: EldoradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EldoradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
