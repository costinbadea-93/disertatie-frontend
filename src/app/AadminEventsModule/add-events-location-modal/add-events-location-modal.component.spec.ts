import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsLocationModalComponent } from './add-events-location-modal.component';

describe('AddEventsLocationModalComponent', () => {
  let component: AddEventsLocationModalComponent;
  let fixture: ComponentFixture<AddEventsLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventsLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventsLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
