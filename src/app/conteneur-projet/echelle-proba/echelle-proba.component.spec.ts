import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchelleProbaComponent } from './echelle-proba.component';

describe('EchelleProbaComponent', () => {
  let component: EchelleProbaComponent;
  let fixture: ComponentFixture<EchelleProbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchelleProbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchelleProbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
