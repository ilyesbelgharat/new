import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalHistoriqueComponent } from './eval-historique.component';

describe('EvalHistoriqueComponent', () => {
  let component: EvalHistoriqueComponent;
  let fixture: ComponentFixture<EvalHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
