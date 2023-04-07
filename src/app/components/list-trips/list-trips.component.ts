import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITrip } from 'src/app/models/trips';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import {
  selectSelectedTripName,
  selectTripNames,
} from 'src/app/store/trips-store/selectors/trips.selectors';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTripsComponent {
  tripsData$: Observable<ITrip[]>;
  selectedTripData$: Observable<ITrip>;

  constructor(protected tripStore: Store<TripsState>) {
    this.tripsData$ = tripStore.select(selectTripNames);
    this.selectedTripData$ = tripStore.select(selectSelectedTripName);
  }
}
