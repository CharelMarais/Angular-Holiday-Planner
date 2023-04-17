import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-add-trips',
  templateUrl: './add-trips.component.html',
  styleUrls: ['./add-trips.component.scss'],
})
export class AddTripsComponent {
  @Input() addingTrip!: boolean;
  @Output() addingTripChange = new EventEmitter<boolean>();
  tripName = '';
  userId = this.fireAuthService.auth.currentUser?.uid;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}

  closeAddTrip() {
    this.addingTripChange.emit(!this.addingTrip);
  }

  addTrip() {
    this.userId && this.firebaseStore.addTrip(this.tripName, this.userId);
    this.tripName = '';
    this.closeAddTrip();
  }
}
