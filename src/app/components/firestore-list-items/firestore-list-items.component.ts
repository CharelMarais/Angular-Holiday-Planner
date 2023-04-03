import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { ItineraryItem } from 'src/app/models/itinerary-item';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import { FsState } from 'src/app/store/reducers/firestore-data.reducer';
import { selectItinaryItem } from 'src/app/store/selectors/firestore-data.selectors';

@Component({
  selector: 'app-firestore-list-items',
  templateUrl: './firestore-list-items.component.html',
  styleUrls: ['./firestore-list-items.component.scss'],
})
export class FirestoreListItemsComponent {
  itineryItemsStore$: Observable<ItineraryItem[]>;

  constructor(
    protected firebaseAuth: FirebaseAuthService,
    protected firebaseStore: FirebaseStoreService,
    protected store: Store<FsState>
  ) {
    this.itineryItemsStore$ = store.select(selectItinaryItem);
  }
}
