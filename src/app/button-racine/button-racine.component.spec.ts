import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRacineComponent } from './button-racine.component';

describe('ButtonRacineComponent', () => {
  let component: ButtonRacineComponent;
  let fixture: ComponentFixture<ButtonRacineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRacineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRacineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
