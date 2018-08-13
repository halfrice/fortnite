import { TestBed, inject } from '@angular/core/testing';

import { NavlinksService } from './navlinks.service';

describe('NavlinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavlinksService]
    });
  });

  it('should be created', inject([NavlinksService], (service: NavlinksService) => {
    expect(service).toBeTruthy();
  }));
});
