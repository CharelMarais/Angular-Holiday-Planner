import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
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
import getUnixTime from 'date-fns/getUnixTime';
import { IConversionData } from 'src/app/models/currency-api';

@Component({
  selector: 'app-add-itinerary-item',
  templateUrl: './add-itinerary-item.component.html',
  styleUrls: ['./add-itinerary-item.component.scss'],
})
export class AddItineraryItemComponent implements OnDestroy {
  @Input() addingItineraryItem!: boolean;
  @Output() addingItineraryItemChange = new EventEmitter<boolean>();

  selectedTripData$: Observable<ITrip>;
  tripName = '';
  tagValue = 'hotel';
  name = '';
  startDate = '';
  startTime = '';
  endDate = '';
  endTime = '';
  cost = 0;
  location = '';
  selectedCurrency = 1;
  userId = this.fireAuthService.auth.currentUser?.uid;
  currencyStore$: Observable<IConversionData[]>;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService,
    protected tripStore: Store<TripsState>,
    protected currencyStore: Store<CurrencyState>,
    private router: Router
  ) {
    this.selectedTripData$ = tripStore.select(selectSelectedTrip);
    this.selectedTripData$.subscribe((trip) => (this.tripName = trip.tripName));

    this.currencyStore$ = currencyStore.select(selectCurrencyApi);
  }

  closeAddItem() {
    this.addingItineraryItemChange.emit(!this.addingItineraryItem);
  }

  addItineraryItem() {
    this.userId &&
      this.tripName &&
      this.firebaseStore.addItineraryItem(
        this.tripName,
        this.name,
        this.tagValue,
        getUnixTime(new Date(this.startDate + ' ' + this.startTime)),
        getUnixTime(new Date(this.endDate + ' ' + this.endTime)),
        this.userId,
        parseFloat((this.cost * (1 / this.selectedCurrency)).toFixed(2))
      );
    this.closeAddItem();
  }

  ngOnDestroy(): void {}
}
