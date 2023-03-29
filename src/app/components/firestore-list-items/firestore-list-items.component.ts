import { Component } from '@angular/core';
import { FirebaseStoreService } from 'src/app/shared/store/firebase-store.service';

@Component({
  selector: 'app-firestore-list-items',
  templateUrl: './firestore-list-items.component.html',
  styleUrls: ['./firestore-list-items.component.scss'],
})
export class FirestoreListItemsComponent {
  constructor(protected firebaseStore: FirebaseStoreService) {}
}
