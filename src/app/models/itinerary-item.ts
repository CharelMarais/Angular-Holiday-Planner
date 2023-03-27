export interface ItineraryItem {
  name: string;
  tag: string;
  startDate: string;
  endDate: string;
  cost: string;
  startLocation?: string;
  endLocation?: string;
  notes?: string;
}
