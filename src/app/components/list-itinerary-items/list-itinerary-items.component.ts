import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, combineLatestWith, every, map, Observable } from 'rxjs';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip } from 'src/app/models/trips';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { selectItinaryItems } from 'src/app/store/itinerary-items-store/selectors/itinerary-items.selectors';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { selectSelectedTrip } from 'src/app/store/trips-store/selectors/trips.selectors';

@Component({
  selector: 'app-list-itinerary-items',
  templateUrl: './list-itinerary-items.component.html',
  styleUrls: ['./list-itinerary-items.component.scss'],
})
export class ListItineraryItemsComponent {
  itineryItemsStore$: Observable<IItineraryItem[]>;
  selectedTripData$: Observable<ITrip>;
  tripItemMatch$: Observable<boolean>;

  constructor(
    protected firebaseAuth: FirebaseAuthService,
    protected itineraryStore: Store<ItineraryItemState>,
    protected tripStore: Store<TripsState>
  ) {
    this.itineryItemsStore$ = itineraryStore.select(selectItinaryItems);
    this.selectedTripData$ = tripStore.select(selectSelectedTrip);
    this.tripItemMatch$ = this.selectedTripData$.pipe(
      combineLatestWith(this.itineryItemsStore$),
      map(([trip, items]) => {
        if (items.find((item) => item.tripName === trip.tripName)) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
