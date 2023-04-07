import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { selectItinaryItem } from 'src/app/store/itinerary-items-store/selectors/itinerary-items.selectors';

@Component({
  selector: 'app-list-itinerary-items',
  templateUrl: './list-itinerary-items.component.html',
  styleUrls: ['./list-itinerary-items.component.scss'],
})
export class ListItineraryItemsComponent {
  itineryItemsStore$: Observable<IItineraryItem[]>;

  constructor(
    protected firebaseAuth: FirebaseAuthService,
    protected firebaseStore: FirebaseStoreService,
    protected store: Store<ItineraryItemState>
  ) {
    this.itineryItemsStore$ = store.select(selectItinaryItem);
  }
}
