import { TestBed } from '@angular/core/testing';
import { WomanShoesService } from './woman-shoes.service';

describe('WomanShoesService', () => {
  let service: WomanShoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomanShoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
