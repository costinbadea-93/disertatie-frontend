import {DatepickerOptions} from 'ng2-datepicker';

export class Constants {
  public static get GET_EVENTS_URL(): string { return 'http://localhost:9000/event/getEvents'; }
  public static get GET_TOP_RATED(): string { return 'http://localhost:9000/event/getTopRatedEvents'; }
  public static get AUTH_TOKEN_URL(): string { return 'http://localhost:9000/users/signin'; }
  public static get GET_SPECIFIC_EVENT_URL(): string { return 'http://localhost:9000/event/getEvent'; }
  public static get APPLY_ON_SPECIFIC_EVENT(): string { return 'http://localhost:9000/eventReservation/addEventReservation'; }
  public static get GET_USER_INFO(): string { return 'http://localhost:9000/users/me'; }
  public static get RATE_EVENT(): string { return 'http://localhost:9000/event/rateEvent'; }
  public static get ADD_LOCATION(): string { return 'http://localhost:9000/eventLocation/addEventLocation'; }
  public static get DELETE_LOCATION(): string { return 'http://localhost:9000/eventLocation/deleteEventLocation'; }
  public static get ADD_EVENT(): string { return 'http://localhost:9000/event/addEvent'; }
  public static get UPDATE_EVENT(): string { return 'http://localhost:9000/event/updateEvent'; }
  public static get DELETE_EVENT(): string { return 'http://localhost:9000/event/deleteEvent'; }
  public static get GET_LOCATIONS(): string { return 'http://localhost:9000/eventLocation/getLocations'; }
  public static get REGISTER_USER(): string { return 'http://localhost:9000/users/signup'; }
  public static get EVENT_REVIEWS(): string { return 'http://localhost:9000/event/getReviews'; }
  public static get ADD_REVIEWS(): string { return 'http://localhost:9000/event/addReview'; }
  public static get DELETE_REVIEW(): string { return 'http://localhost:9000/event/deleteReview'; }
  public static get GET_RESERVATIONS(): string { return 'http://localhost:9000/eventReservation/getReservations'; }
  public static get DELETE_RESERVATION(): string { return 'http://localhost:9000/eventReservation/deleteEventReservation'; }
  public static get CONTACT_ADMIN(): string { return 'http://localhost:9000/event/contactAdmin'; }

  public static get DATEPICKER_OPTIONS(): DatepickerOptions {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return {
      minYear: 1970,
      maxYear: 2030,
      displayFormat: 'MMMM DD YYYY',
      barTitleFormat: 'MMMM YYYY',
      dayNamesFormat: 'dd',
      firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
      minDate: yesterday,
      maxDate: new Date('12-12-2100'),  // Maximal selectable date
      barTitleIfEmpty: 'Click to select a date',
      placeholder: 'Event date', // HTML input placeholder attribute (default: '')
      addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
      addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
      fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
      useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
    };
  }
}
