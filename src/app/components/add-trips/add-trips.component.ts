import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-add-trips',
  templateUrl: './add-trips.component.html',
  styleUrls: ['./add-trips.component.scss'],
})
export class AddTripsComponent {
  tripName = '';
  userId = this.fireAuthService.auth.currentUser?.uid;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}

  addTrip() {
    this.userId && this.firebaseStore.addTrip(this.tripName, this.userId);
    this.tripName = '';
  }
}
