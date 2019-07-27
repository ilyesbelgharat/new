import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventFinalComponent } from './list-event-final.component';

describe('ListEventFinalComponent', () => {
  let component: ListEventFinalComponent;
  let fixture: ComponentFixture<ListEventFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEventFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
