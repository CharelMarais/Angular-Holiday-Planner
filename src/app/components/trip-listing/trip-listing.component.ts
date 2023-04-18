import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ITrip } from 'src/app/models/trips';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import differenceInDays from 'date-fns/differenceInDays';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setSelectedTrip } from 'src/app/store/trips-store/actions/trips.actions';

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
  updatedTripName: string = '';

  isEditing: boolean = false;
  isDeletingTrip: boolean = false;

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  toggleDeletingTrip() {
    this.isDeletingTrip = !this.isDeletingTrip;
  }

  deleteTrip(tripName: string) {
    this.firebaseStore.deleteTripByTripName(tripName);
    this.toggleDeletingTrip();
  }

  updateTrip() {
    this.firebaseStore.updateTripByTripName(
      this.trip.tripName,
      this.updatedTripName
    );
    this.toggleEditing();
  }

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected tripStore: Store<TripsState>,

    private router: Router
  ) {}
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

  setSelectedTrip(trip: ITrip) {
    const selectedTrip: ITrip = trip;
    this.tripStore.dispatch(setSelectedTrip({ selectedTrip }));
    this.router.navigate([`trip/${trip.tripName}`]);
  }
}
