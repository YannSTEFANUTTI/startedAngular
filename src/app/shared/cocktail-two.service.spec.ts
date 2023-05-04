import { TestBed } from '@angular/core/testing';

import { CocktailTwoService } from './cocktail-two.service';

describe('CocktailTwoService', () => {
  let service: CocktailTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
