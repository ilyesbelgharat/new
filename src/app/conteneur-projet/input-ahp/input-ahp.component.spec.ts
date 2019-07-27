import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAHPComponent } from './input-ahp.component';

describe('InputAHPComponent', () => {
  let component: InputAHPComponent;
  let fixture: ComponentFixture<InputAHPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAHPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
