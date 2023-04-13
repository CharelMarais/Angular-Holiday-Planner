import { IItineraryItem } from './itinerary-item';

export interface ITrip {
  userId: string;
  tripName: string;
}

export interface ITripData {
  trip: ITrip;
  totalCost?: number;
  startDate?: Date;
  endDate?: Date;
  totalItems?: number;
}
