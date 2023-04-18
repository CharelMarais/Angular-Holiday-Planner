import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-add-trips',
  templateUrl: './add-trips.component.html',
  styleUrls: ['./add-trips.component.scss'],
})
export class AddTripsComponent {
  @Input() isAddingTrip: boolean = false;
  @Output() isAddingTripChange = new EventEmitter<boolean>();
  tripName = '';
  userId = this.fireAuthService.auth.currentUser?.uid;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}

  closeAddTrip() {
    this.isAddingTripChange.emit(this.isAddingTrip);
  }

  addTrip() {
    this.userId && this.firebaseStore.addTrip(this.tripName, this.userId);
    this.tripName = '';
    this.closeAddTrip();
  }
}
