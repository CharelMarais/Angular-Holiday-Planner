import { Component, Input } from '@angular/core';
import { ITrip } from 'src/app/models/trips';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.scss'],
})
export class TripListingComponent {
  @Input() totalCost: number | undefined;
  @Input() trip: ITrip = { tripName: '', userId: '' };
  @Input() itemsCount: number | undefined;
  @Input() startDate?: Date;
  @Input() endDate?: Date;
  duration = (this.endDate = this.startDate);

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
}
