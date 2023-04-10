import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ITrip } from 'src/app/models/trips';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import { setSelectedTrip } from 'src/app/store/trips-store/actions/trips.actions';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.scss'],
})
export class TripListingComponent {
  @Input() trip: ITrip = { tripName: '', userId: '' };
  @Input() selectedTrip: ITrip | null = { tripName: '', userId: '' };
  editing: boolean = false;
  selected: boolean = false;

  editSwitch() {
    this.editing = !this.editing;
  }

  deleteTrip(tripName: string) {
    this.firebaseStore.deleteTripByTripName(tripName);
    const selectedTrip: ITrip = { tripName: '', userId: '' };
    this.tripStore.dispatch(setSelectedTrip({ selectedTrip }));
  }

  updateForm = this.fb.group({
    updateTripField: ['', Validators.minLength(5)],
  });

  updateTrip() {
    if (this.updateForm.get('updateTripField')?.valid) {
      this.firebaseStore.updateTripByTripName(
        this.trip.tripName,
        this.updateForm.get('updateTripField')?.value as string
      );
      this.editSwitch();
    } else {
      console.log('dont be a dumbass');
    }
  }

  setSelectedTrip(trip: ITrip) {
    this.selected = !this.selected;
    if (this.selected) {
      const selectedTrip: ITrip = trip;
      this.tripStore.dispatch(setSelectedTrip({ selectedTrip }));
    } else {
      const selectedTrip: ITrip = { tripName: '', userId: '' };
      this.tripStore.dispatch(setSelectedTrip({ selectedTrip }));
    }
  }

  constructor(
    protected firebaseStore: FirebaseStoreService,
    private fb: FormBuilder,
    private tripStore: Store<TripsState>
  ) {}
}
