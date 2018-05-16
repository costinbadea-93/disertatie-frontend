export class Constants {
  public static get GET_EVENTS_URL(): string { return 'http://localhost:9000/event/getEvents'; }
  public static get AUTH_TOKEN_URL(): string { return 'http://localhost:9000/users/signin'; }
  public static get GET_SPECIFIC_EVENT_URL(): string { return 'http://localhost:9000/event/getEvent'; }
  public static get APPLY_ON_SPECIFIC_EVENT(): string { return 'http://localhost:9000/eventReservation/addEventReservation'; }
  public static get GET_USER_INFO(): string { return 'http://localhost:9000/users/me'; }
}
