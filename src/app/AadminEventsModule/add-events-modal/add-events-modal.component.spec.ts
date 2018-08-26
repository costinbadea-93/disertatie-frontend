import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsModalComponent } from './add-events-modal.component';

describe('AddEventsModalComponent', () => {
  let component: AddEventsModalComponent;
  let fixture: ComponentFixture<AddEventsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
