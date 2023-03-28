import {
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ItineraryItem } from 'src/app/models/itinerary-item';
import { FirebaseAuthService } from '../auth/firebase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStoreService {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  itinerary$: Observable<ItineraryItem[]> | undefined;
  itineraryCollection!: CollectionReference;

  constructor(protected fireAuthService: FirebaseAuthService) {
    // get a reference to the itinerary collection
    const userItineraryItemCollection = collection(
      this.firestore,
      'itinerary_items_' + fireAuthService.auth.currentUser?.email
    );
    this.itineraryCollection = userItineraryItemCollection;

    // get documents (data) from the collection using collectionData
    this.itinerary$ = collectionData(userItineraryItemCollection) as Observable<
      ItineraryItem[]
    >;
  }

  addItineraryItem(
    name: string,
    tag: string,
    startDate: string,
    endDate: string,
    cost: string,
    startLocation?: string,
    endLocation?: string,
    notes?: string
  ) {
    if (!(name || tag || startDate || endDate || cost)) return;
    addDoc(this.itineraryCollection, <ItineraryItem>{
      name,
      tag,
      startDate,
      endDate,
      cost,
    });
  }
}
