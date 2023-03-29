import { Component, ViewChild } from '@angular/core';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/shared/store/firebase-store.service';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-firestore-add-item',
  templateUrl: './firestore-add-item.component.html',
  styleUrls: ['./firestore-add-item.component.scss'],
})
export class FirestoreAddItemComponent {
  date = null;
  radioValue = 'A';

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}
}
