import {EventLocationModel} from './eventLocation';

export class EventModel {
   id: number;
   eventName: String;
   eventDescription: String;
   freePlacesNumber: number;
   eventLocation: EventLocationModel;
}
