import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Component({
  selector: 'app-firestore-add-item',
  templateUrl: './firestore-add-item.component.html',
  styleUrls: ['./firestore-add-item.component.scss'],
})
export class FirestoreAddItemComponent {
  selectedTrip = '';
  tagValue = 'hotel';
  name = '';
  startDateTime = '';
  endDateTime = '';
  cost = '';
  location = '';

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}

  addItineraryItem(
    name: string,
    tag: string,
    startDate: string,
    endDate: string,
    cost: string
  ) {
    this.firebaseStore.addItineraryItem(name, tag, startDate, endDate, cost);
  }
}
