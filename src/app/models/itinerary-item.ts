export interface IItineraryItem {
  tripName: string;
  name: string;
  tag: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  cost: number;
  startLocation?: string;
  endLocation?: string;
  notes?: string;
  userId: string | undefined;
}
