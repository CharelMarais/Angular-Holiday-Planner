import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITrip } from 'src/app/models/trips';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import { CurrencyState } from 'src/app/store/currency/reducers/currency-api.reducer';
import { selectCurrencyApi } from 'src/app/store/currency/selectors/currency-api.selectors';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { selectSelectedTrip } from 'src/app/store/trips-store/selectors/trips.selectors';

@Component({
  selector: 'app-add-itinerary-item',
  templateUrl: './add-itinerary-item.component.html',
  styleUrls: ['./add-itinerary-item.component.scss'],
})
export class AddItineraryItemComponent implements OnDestroy {
  selectedTripData$: Observable<ITrip>;
  tripName = '';
  tagValue = 'hotel';
  name = '';
  startDate = new Date();
  startTime = new Date();
  endDate = new Date();
  endTime = new Date();
  cost = 0;
  location = '';
  userId = this.fireAuthService.auth.currentUser?.uid;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService,
    protected tripStore: Store<TripsState>,
    protected currencyStore: Store<CurrencyState>,
    private router: Router
  ) {
    this.selectedTripData$ = tripStore.select(selectSelectedTrip);
    this.selectedTripData$.subscribe((trip) => {
      if (trip.tripName.length) {
        this.tripName = trip.tripName;
      } else {
        this.router.navigate(['dashboard']);
      }
    });

    currencyStore.select(selectCurrencyApi).subscribe((items) => {
      if (items.length > 1) {
        console.log(items); // Will implement from here
      }
    });
  }

  addItineraryItem() {
    this.userId &&
      this.firebaseStore.addItineraryItem(
        this.tripName,
        this.name,
        this.tagValue,
        this.startDate,
        this.endDate,
        this.userId,
        this.cost
      );
    this.router.navigate(['dashboard']);
  }

  ngOnDestroy(): void {}
}
