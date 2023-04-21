import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesCoursComponent } from './directives-cours.component';

describe('DirectivesCoursComponent', () => {
  let component: DirectivesCoursComponent;
  let fixture: ComponentFixture<DirectivesCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
