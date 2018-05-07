import {EventLocationModel} from './eventLocation';

export class EventModel {
   id: number;
   eventName: String;
   eventDescription: String;
   category: String;
   eventDate: any;
   startTime: String;
   freePlacesNumber: number;
   eventLocation: EventLocationModel;
}
