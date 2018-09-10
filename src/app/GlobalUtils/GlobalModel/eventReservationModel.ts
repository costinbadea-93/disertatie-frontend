/**
 * Created by cbadea on 5/18/2018.
 */
import {EventModel} from './eventModel';
import {UserModel} from './userModel';

export class EventReservationModel {
  id: number;
  numberOfReservedPlaces: number;
  eventId: number;
  userId: string;
  event: EventModel;
  user: UserModel;
}
