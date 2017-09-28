import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanComponent } from './diet-plan.component';

describe('DietPlanComponent', () => {
  let component: DietPlanComponent;
  let fixture: ComponentFixture<DietPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});