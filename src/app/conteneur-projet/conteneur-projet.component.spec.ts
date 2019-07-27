import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneurProjetComponent } from './conteneur-projet.component';

describe('ConteneurProjetComponent', () => {
  let component: ConteneurProjetComponent;
  let fixture: ComponentFixture<ConteneurProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteneurProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteneurProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
