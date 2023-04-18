import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { getCurrencyApi } from 'src/app/store/currency/actions/currency-api.actions';
import { CurrencyState } from 'src/app/store/currency/reducers/currency-api.reducer';
import { getItineraryItems } from 'src/app/store/itinerary-items-store/actions/itinerary-items.actions';
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { getTrips } from 'src/app/store/trips-store/actions/trips.actions';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  addingTrip: boolean = false;
  signingOut: boolean = false;
  loadingTrips$: Observable<boolean> | undefined;
  loadingItems$: Observable<boolean> | undefined;

  constructor(
    private itineraryItemStore: Store<ItineraryItemState>,
    private tripStore: Store<TripsState>,
    private currencyStore: Store<CurrencyState>,
    protected fireAuthService: FirebaseAuthService
  ) {
    if (getAuth().currentUser?.uid) {
      this.tripStore.dispatch(getTrips());
      this.itineraryItemStore.dispatch(getItineraryItems());
      this.currencyStore.dispatch(getCurrencyApi());
    }
  }
  ngOnInit(): void {
    this.loadingItems$ = this.itineraryItemStore.select(
      (state) => state.isLoading
    );
    this.loadingTrips$ = this.tripStore.select((state) => state.isLoading);
  }

  addTripSwitch() {
    this.addingTrip = !this.addingTrip;
  }

  signingOutSwitch() {
    this.signingOut = !this.signingOut;
  }
}
