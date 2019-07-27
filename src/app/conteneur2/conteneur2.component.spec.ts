import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteneur2Component } from './conteneur2.component';

describe('Conteneur2Component', () => {
  let component: Conteneur2Component;
  let fixture: ComponentFixture<Conteneur2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conteneur2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conteneur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
