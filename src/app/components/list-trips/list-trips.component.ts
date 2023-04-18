import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Observable,
  map,
  combineLatest,
  mergeMap,
  Subject,
  takeUntil,
} from 'rxjs';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip, ITripData } from 'src/app/models/trips';
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { selectItinaryItems } from 'src/app/store/itinerary-items-store/selectors/itinerary-items.selectors';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { selectTrips } from 'src/app/store/trips-store/selectors/trips.selectors';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTripsComponent implements OnDestroy {
  destroy$ = new Subject();
  tripsData$: Observable<ITrip[]>;
  itineraryData$: Observable<IItineraryItem[]>;
  tripsWithItinerary$: Observable<ITripData[]>;

  constructor(
    protected tripStore: Store<TripsState>,
    protected itineraryStore: Store<ItineraryItemState>
  ) {
    this.tripsData$ = tripStore.select(selectTrips);
    this.itineraryData$ = itineraryStore.select(selectItinaryItems);

    this.tripsWithItinerary$ = combineLatest([
      this.tripsData$,
      this.itineraryData$,
    ]).pipe(
      mergeMap(([trips, itinerary]) => {
        return [
          trips.map((trip) => {
            const filteredItinerary = itinerary.filter(
              (itinerary) => itinerary.tripName === trip.tripName
            );
            return {
              trip,
              totalCost: filteredItinerary.reduce(
                (sum, itineraryItem) => sum + itineraryItem.cost,
                0
              ),
              startDate: filteredItinerary.reduce(
                (min, itineraryItem) => Math.min(min, itineraryItem.startDate),
                32501076447
              ),
              endDate: filteredItinerary.reduce(
                (max, itineraryItem) => Math.max(max, itineraryItem.endDate),
                0
              ),
              totalItems: filteredItinerary.length,
            };
          }),
        ];
      })
    );
  }

  testObservable() {
    if (this.tripsWithItinerary$)
      this.tripsWithItinerary$
        .pipe(takeUntil(this.destroy$))
        .subscribe((test) => console.log(test));
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
