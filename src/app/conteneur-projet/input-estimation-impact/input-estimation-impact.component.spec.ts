import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEstimationImpactComponent } from './input-estimation-impact.component';

describe('InputEstimationImpactComponent', () => {
  let component: InputEstimationImpactComponent;
  let fixture: ComponentFixture<InputEstimationImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEstimationImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEstimationImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
