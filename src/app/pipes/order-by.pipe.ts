import { Pipe, PipeTransform } from '@angular/core';
import { IItineraryItem } from '../models/itinerary-item';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    value: IItineraryItem[],
    order: 'asc' | 'desc' = 'asc'
  ): IItineraryItem[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.startDate - b.startDate;
      } else if (order === 'desc') {
        return b.startDate - a.startDate;
      }
      return 0;
    });
  }
}
