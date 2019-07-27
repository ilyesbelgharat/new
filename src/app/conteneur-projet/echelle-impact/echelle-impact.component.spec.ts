import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchelleImpactComponent } from './echelle-impact.component';

describe('EchelleImpactComponent', () => {
  let component: EchelleImpactComponent;
  let fixture: ComponentFixture<EchelleImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchelleImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchelleImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
