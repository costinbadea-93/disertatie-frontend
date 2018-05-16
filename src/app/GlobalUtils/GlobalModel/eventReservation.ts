import {UserModel} from "./userModel";
import {EventModel} from "./eventModel";
/**
 * Created by cbadea on 5/16/2018.
 */
export class EventReservationModel {
  id: number;
  numberOfReservedPlaces: number;
  user : UserModel;
  event: EventModel;
}
