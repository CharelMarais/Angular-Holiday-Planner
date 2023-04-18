import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuth } from 'firebase/auth';
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
export class DashboardComponent {
  isAddingTrip: boolean = false;
  isSigningOut: boolean = false;

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

  toggleAddingTrip() {
    this.isAddingTrip = this.isAddingTrip;
  }

  toggleSigningOut() {
    this.isSigningOut = this.isSigningOut;
  }
}
