export interface IItineraryItem {
  tripName: string;
  name: string;
  tag: string;
  startDate: number;
  startTime: number;
  endDate: number;
  endTime: number;
  cost: number;
  userId: string | undefined;
}
