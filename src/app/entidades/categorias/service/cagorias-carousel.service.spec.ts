import { TestBed } from '@angular/core/testing';

import { CagoriasCarouselService } from './cagorias-carousel.service';

describe('CagoriasCarouselService', () => {
  let service: CagoriasCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CagoriasCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
