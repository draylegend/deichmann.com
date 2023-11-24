import { TestBed } from '@angular/core/testing';
import { WomanShoesFacade } from './woman-shoes.facade';

describe('WomanShoesFacadeService', () => {
  let service: WomanShoesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomanShoesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
