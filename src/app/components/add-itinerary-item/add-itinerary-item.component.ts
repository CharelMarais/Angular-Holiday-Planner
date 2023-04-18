import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ITrip } from 'src/app/models/trips';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import { CurrencyState } from 'src/app/store/currency/reducers/currency-api.reducer';
import { selectCurrencyApi } from 'src/app/store/currency/selectors/currency-api.selectors';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { selectSelectedTrip } from 'src/app/store/trips-store/selectors/trips.selectors';
import getUnixTime from 'date-fns/getUnixTime';
import { IConversionData } from 'src/app/models/currency-api';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-itinerary-item',
  templateUrl: './add-itinerary-item.component.html',
  styleUrls: ['./add-itinerary-item.component.scss'],
})
export class AddItineraryItemComponent implements OnDestroy {
  @Input() isAddingItem: boolean = false;
  @Output() isAddingItemChange = new EventEmitter<boolean>();

  destroy$ = new Subject();
  selectedTripData$: Observable<ITrip>;

  addItemForm = this.fb.group({
    tripName: ['', Validators.required],
    tag: ['hotel', Validators.required],
    name: ['', Validators.required],
    startDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endDate: ['', Validators.required],
    endTime: ['', Validators.required],
    cost: [0, Validators.requiredTrue],
    selectedCurrency: [1, Validators.required],
  });
  userId = this.fireAuthService.auth.currentUser?.uid;
  currencyStore$: Observable<IConversionData[]>;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService,
    protected tripStore: Store<TripsState>,
    protected currencyStore: Store<CurrencyState>,
    private fb: FormBuilder
  ) {
    this.selectedTripData$ = tripStore.select(selectSelectedTrip);
    this.selectedTripData$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (trip) =>
          ((this.addItemForm.get('tripName')!.value as string) = trip.tripName)
      );

    this.currencyStore$ = currencyStore.select(selectCurrencyApi);
  }

  closeAddItem() {
    this.isAddingItemChange.emit(!this.isAddingItem);
  }

  addItineraryItem() {
    this.userId &&
      (this.addItemForm.get('tripName')?.value as string) &&
      this.firebaseStore.addItineraryItem(
        this.addItemForm.get('tripName')?.value as string,
        this.addItemForm.get('name')?.value as string,
        this.addItemForm.get('tag')?.value as string,
        getUnixTime(
          new Date(
            (this.addItemForm.get('startDate')?.value as string) +
              ' ' +
              (this.addItemForm.get('startTime')?.value as string)
          )
        ),
        getUnixTime(
          new Date(
            (this.addItemForm.get('endDate')?.value as string) +
              ' ' +
              (this.addItemForm.get('endTime')?.value as string)
          )
        ),
        this.userId,
        parseFloat(
          (
            (this.addItemForm.get('cost')?.value as number) *
            (1 / (this.addItemForm.get('selectedCurrency')?.value as number))
          ).toFixed(2)
        )
      );
    this.closeAddItem();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
