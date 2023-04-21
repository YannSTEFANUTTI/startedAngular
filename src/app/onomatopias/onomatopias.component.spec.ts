import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiasComponent } from './onomatopias.component';

describe('OnomatopiasComponent', () => {
  let component: OnomatopiasComponent;
  let fixture: ComponentFixture<OnomatopiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnomatopiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnomatopiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
