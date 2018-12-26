import { TestBed, inject } from '@angular/core/testing';

import { HeroTestService } from './hero-test.service';

describe('HeroTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroTestService]
    });
  });

  it('should be created', inject([HeroTestService], (service: HeroTestService) => {
    expect(service).toBeTruthy();
  }));
});
