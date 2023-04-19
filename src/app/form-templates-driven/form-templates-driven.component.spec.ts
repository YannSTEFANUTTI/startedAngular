import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplatesDrivenComponent } from './form-templates-driven.component';

describe('FormTemplatesDrivenComponent', () => {
  let component: FormTemplatesDrivenComponent;
  let fixture: ComponentFixture<FormTemplatesDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplatesDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplatesDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
