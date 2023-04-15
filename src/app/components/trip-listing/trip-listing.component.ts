import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ITrip } from 'src/app/models/trips';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import differenceInDays from 'date-fns/differenceInDays';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.scss'],
})
export class TripListingComponent implements OnInit {
  @Input() totalCost: number | undefined;
  @Input() trip: ITrip = { tripName: '', userId: '' };
  @Input() itemsCount?: number;
  @Input() startDate?: number;
  @Input() endDate?: number;
  duration: number = 0;
  formatedStartDate: string = '';

  // To be moved to another file in a sperate branch

  // editSwitch() {
  //   this.editing = !this.editing;
  // }

  // deleteTrip(tripName: string) {
  //   this.firebaseStore.deleteTripByTripName(tripName);
  //   const selectedTrip: ITrip = { tripName: '', userId: '' };
  //   this.tripStore.dispatch(setSelectedTrip({ selectedTrip }));
  // }

  // updateForm = this.fb.group({
  //   updateTripField: ['', Validators.minLength(5)],
  // });

  // updateTrip() {
  //   if (this.updateForm.get('updateTripField')?.valid) {
  //     this.firebaseStore.updateTripByTripName(
  //       this.trip.tripName,
  //       this.updateForm.get('updateTripField')?.value as string
  //     );
  //     this.editSwitch();
  //   } else {
  //     console.log('dont be a dumbass');
  //   }
  // }

  constructor(protected firebaseStore: FirebaseStoreService) {}
  ngOnInit(): void {
    this.duration = differenceInDays(
      fromUnixTime(this.endDate ?? 0),
      fromUnixTime(this.startDate ?? 0)
    );

    this.formatedStartDate = format(
      fromUnixTime(this.startDate ?? 0),
      'dd MMM yy'
    );
  }
}
