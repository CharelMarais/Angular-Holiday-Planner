import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITrip } from 'src/app/models/trips';
import { setSelectedTrip } from 'src/app/store/trips-store/actions/trips.actions';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { selectSelectedTrip } from 'src/app/store/trips-store/selectors/trips.selectors';

@Component({
  selector: 'app-trip-itinerary',
  templateUrl: './trip-itinerary.component.html',
  styleUrls: ['./trip-itinerary.component.scss'],
})
export class TripItineraryComponent implements OnInit {
  selectedTripData$: Observable<ITrip>;
  isAddingItem = false;
  isSigningOut = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected tripStore: Store<TripsState>
  ) {
    this.selectedTripData$ = tripStore.select(selectSelectedTrip);
  }

  ngOnInit(): void {
    this.route.params.subscribe((routeTrip) =>
      this.selectedTripData$.subscribe((selectedTrip) => {
        if (selectedTrip.tripName !== routeTrip['tripName']) {
          this.router.navigate(['dashboard']);
        }
      })
    );
  }

  goBack(): void {
    this.router.navigate(['dashboard']);
    this.tripStore.dispatch(
      setSelectedTrip({
        selectedTrip: { tripName: '', userId: '' },
      })
    );
  }

  toggleAddingItem() {
    this.isAddingItem = !this.isAddingItem;
  }

  toggleSigningOut() {
    this.isSigningOut = !this.isSigningOut;
  }
}
