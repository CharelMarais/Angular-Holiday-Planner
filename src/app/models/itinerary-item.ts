export interface IItineraryItem {
  tripName: string;
  name: string;
  tag: string;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  cost: number;
  startLocation?: string;
  endLocation?: string;
  notes?: string;
  userId: string | undefined;
}
