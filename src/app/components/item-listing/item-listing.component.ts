import { AfterContentInit, Component, Input } from '@angular/core';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import { DatePipe } from '@angular/common';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss'],
})
export class ItemListingComponent implements AfterContentInit {
  @Input() itineraryItem: IItineraryItem = {
    tripName: '',
    name: '',
    tag: '',
    startDate: 0,
    startTime: 0,
    endDate: 0,
    endTime: 0,
    cost: 0,
    userId: undefined,
  };

  formattedStartDate: string = '';
  formattedEndDate: string = '';

  ngAfterContentInit(): void {
    this.formattedStartDate = format(
      fromUnixTime(this.itineraryItem.startDate),
      'dd/LLL/yyyy'
    );
    this.formattedEndDate = format(
      fromUnixTime(this.itineraryItem.endDate),
      'dd/LLL/yyyy'
    );
  }
}
