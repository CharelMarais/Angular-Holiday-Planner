import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-add-itinerary-item',
  templateUrl: './add-itinerary-item.component.html',
  styleUrls: ['./add-itinerary-item.component.scss'],
})
export class AddItineraryItemComponent {
  selectedTrip = '';
  tagValue = 'hotel';
  name = '';
  startDateTime = '';
  endDateTime = '';
  cost = '';
  location = '';
  userId = this.fireAuthService.auth.currentUser?.uid;

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}

  addItineraryItem() {
    this.userId &&
      this.firebaseStore.addItineraryItem(
        this.name,
        this.tagValue,
        this.startDateTime,
        this.endDateTime,
        this.userId,
        this.cost
      );
  }
}
