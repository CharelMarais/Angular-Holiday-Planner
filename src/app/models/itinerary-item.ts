export interface IItineraryItem {
  tripName: string;
  name: string;
  tag: string;
  startDate: number;
  startTime: number;
  endDate: number;
  endTime: number;
  cost: number;
  startLocation?: string;
  endLocation?: string;
  notes?: string;
  userId: string | undefined;
}
