import { ITrip } from './trip-names';

export interface ItineraryItem {
  trip_name: ITrip;
  name: string;
  tag: string;
  startDate: string;
  endDate: string;
  cost: string;
  startLocation?: string;
  endLocation?: string;
  notes?: string;
}
