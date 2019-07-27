import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAcceptComponent } from './if-accept.component';

describe('IfAcceptComponent', () => {
  let component: IfAcceptComponent;
  let fixture: ComponentFixture<IfAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
