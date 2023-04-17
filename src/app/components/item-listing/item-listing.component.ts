import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInDays from 'date-fns/differenceInDays';

import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss'],
})
export class ItemListingComponent implements OnInit {
  constructor(protected firebaseStore: FirebaseStoreService) {}

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
  durationMinutes: number = 0;
  durationHours: number = 0;
  durationDays: number = 0;
  duration: string = '';

  activeEditing: boolean = false;
  updatingTrip: boolean = false;
  updatedItemName: string = '';
  deleteItemCheck: boolean = false;

  deleteItemCheckSwitch() {
    this.deleteItemCheck = !this.deleteItemCheck;
  }

  editSwitch() {
    this.activeEditing = !this.activeEditing;
  }

  updateSwitch() {
    this.updatingTrip = !this.updatingTrip;
  }

  updateItem() {
    this.firebaseStore.updateItemByName(
      this.itineraryItem.tripName,
      this.itineraryItem.name,
      this.updatedItemName
    );
    this.updateSwitch();
  }

  deleteItem() {
    this.firebaseStore.deleteItemByName(
      this.itineraryItem.tripName,
      this.itineraryItem.name
    );
    this.deleteItemCheckSwitch();
  }

  ngOnInit(): void {
    this.formattedStartDate = format(
      fromUnixTime(this.itineraryItem.startDate),
      'dd MMM yy hh:mm aa'
    );
    this.formattedEndDate = format(
      fromUnixTime(this.itineraryItem.endDate),
      'dd MMM yy hh:mm aa'
    );

    this.durationMinutes = differenceInMinutes(
      fromUnixTime(this.itineraryItem.endDate),
      fromUnixTime(this.itineraryItem.startDate)
    );
    this.durationHours = differenceInHours(
      fromUnixTime(this.itineraryItem.endDate),
      fromUnixTime(this.itineraryItem.startDate)
    );
    this.durationDays = differenceInDays(
      fromUnixTime(this.itineraryItem.endDate),
      fromUnixTime(this.itineraryItem.startDate)
    );

    this.duration =
      this.durationMinutes < 60
        ? this.durationMinutes + ' Minutes'
        : this.durationHours < 24
        ? this.durationHours + ' Hours'
        : this.durationDays + ' Days';
  }
}
