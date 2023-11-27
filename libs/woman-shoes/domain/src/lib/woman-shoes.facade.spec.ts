import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WomanShoesFacade } from './woman-shoes.facade';
import { WomanShoesService } from './woman-shoes.service';

describe('WomanShoesFacadeService', () => {
  let service: WomanShoesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WomanShoesFacade, WomanShoesService],
    });
    service = TestBed.inject(WomanShoesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
