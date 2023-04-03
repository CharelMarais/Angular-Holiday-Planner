import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';
import { FirebaseStoreService } from 'src/app/shared/store/firebase-store.service';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-firestore-add-item',
  templateUrl: './firestore-add-item.component.html',
  styleUrls: ['./firestore-add-item.component.scss'],
})
export class FirestoreAddItemComponent {
  selectedTrip = '';
  tagValue = 'hotel';
  name = '';
  startDateTime = Date;
  endDateTime = Date;
  cost = 0;
  location = '';

  constructor(
    protected firebaseStore: FirebaseStoreService,
    protected fireAuthService: FirebaseAuthService
  ) {}

  test(tag: any) {
    console.log(this.tagValue);
  }

  log(): void {
    console.log('click dropdown button');
  }
}

// firebaseStore.addItineraryItem(
//           email.value,
//           name.value,
//           tag.value,
//           start_date.value,
//           end_date.value,
//           cost.value
//         )
