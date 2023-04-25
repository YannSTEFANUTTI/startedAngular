import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailList02Component } from './cocktail-list02.component';

describe('CocktailList02Component', () => {
  let component: CocktailList02Component;
  let fixture: ComponentFixture<CocktailList02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailList02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailList02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
