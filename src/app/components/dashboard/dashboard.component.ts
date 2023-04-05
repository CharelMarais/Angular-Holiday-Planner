import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuth } from 'firebase/auth';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { getItineraryItems } from 'src/app/store/itinerary-items-store/actions/itinerary-items.actions';
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { UserState } from 'src/app/store/user-store/reducers/user.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent {
  constructor(
    private itineraryItemStore: Store<ItineraryItemState>,
    private userStore: Store<UserState>,
    protected fireAuthService: FirebaseAuthService
  ) {
    if (getAuth().currentUser?.uid) {
      this.itineraryItemStore.dispatch(getItineraryItems());
    }
    // this.userStore.dispatch(getLogedInUser());   To be implemented later
  }
}
