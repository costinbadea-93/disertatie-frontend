import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedEventsComponent } from './top-rated-events.component';

describe('TopRatedEventsComponent', () => {
  let component: TopRatedEventsComponent;
  let fixture: ComponentFixture<TopRatedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
