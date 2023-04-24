import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenRacineComponent } from './kitten-racine.component';

describe('KittenRacineComponent', () => {
  let component: KittenRacineComponent;
  let fixture: ComponentFixture<KittenRacineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenRacineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenRacineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
