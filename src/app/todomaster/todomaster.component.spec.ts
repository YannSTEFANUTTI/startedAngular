import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomasterComponent } from './todomaster.component';

describe('TodomasterComponent', () => {
  let component: TodomasterComponent;
  let fixture: ComponentFixture<TodomasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodomasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodomasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
