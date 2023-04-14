import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, combineLatest, mergeMap, forkJoin } from 'rxjs';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip, ITripData } from 'src/app/models/trips';
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { selectItinaryItems } from 'src/app/store/itinerary-items-store/selectors/itinerary-items.selectors';
import { setSelectedTrip } from 'src/app/store/trips-store/actions/trips.actions';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { selectTrips } from 'src/app/store/trips-store/selectors/trips.selectors';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTripsComponent {
  tripsData$: Observable<ITrip[]>;
  itineraryData$: Observable<IItineraryItem[]>;
  tripsWithItinerary$: Observable<ITripData[]>;

  constructor(
    protected tripStore: Store<TripsState>,
    protected itineraryStore: Store<ItineraryItemState>,
    private router: Router
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
                (earliestDate, itineraryItem) => {
                  const startDate = new Date(itineraryItem.startDate);
                  return startDate < earliestDate ? startDate : earliestDate;
                },
                new Date(Number.MAX_SAFE_INTEGER)
              ),
              endDate: filteredItinerary.reduce(
                (earliestDate, itineraryItem) => {
                  const startDate = new Date(itineraryItem.startDate);
                  return startDate > earliestDate ? startDate : earliestDate;
                },
                new Date(Number.MAX_SAFE_INTEGER)
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
      this.tripsWithItinerary$.subscribe((test) => console.log(test));
  }

  setSelectedTrip(trip: ITrip) {
    const selectedTrip: ITrip = trip;
    this.tripStore.dispatch(setSelectedTrip({ selectedTrip }));
    this.router.navigate([`trip/${trip.tripName}`]);
  }
}
