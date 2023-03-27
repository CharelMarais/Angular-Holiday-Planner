import { Component } from '@angular/core';
import { FirebaseStoreService } from 'src/app/shared/store/firebase-store.service';

@Component({
  selector: 'app-firestore-add-item',
  templateUrl: './firestore-add-item.component.html',
  styleUrls: ['./firestore-add-item.component.scss'],
})
export class FirestoreAddItemComponent {
  constructor(protected firebaseStore: FirebaseStoreService) {}
}
