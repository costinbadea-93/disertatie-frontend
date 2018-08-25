import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsLocationComponent } from './add-events-location.component';

describe('AddEventsLocationComponent', () => {
  let component: AddEventsLocationComponent;
  let fixture: ComponentFixture<AddEventsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
