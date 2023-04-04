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
import { ITrip } from 'src/app/models/trip-names';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStoreService {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  itinerary$: Observable<ItineraryItem[]>;
  itineraryCollection: CollectionReference;

  trip_names$: Observable<ITrip[]> | undefined;
  tripCollection: CollectionReference;

  constructor() {
    const userItineraryItemCollection = collection(
      this.firestore,
      'itinerary_items'
    );
    this.itineraryCollection = userItineraryItemCollection;
    this.itinerary$ = collectionData(userItineraryItemCollection) as Observable<
      ItineraryItem[]
    >;

    const userTripCollection = collection(this.firestore, 'trip_names');
    this.tripCollection = userTripCollection;
    this.trip_names$ = collectionData(userTripCollection) as Observable<
      ITrip[]
    >;
  }

  addTrip(name: string) {
    if (name) {
      addDoc(this.tripCollection, <ITrip>{ name });
    }
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

  //rxjs store

  getItineraryItems() {
    return collectionData(
      collection(this.firestore, 'itinerary_items')
    ) as Observable<ItineraryItem[]>;
  }

  getTripNames() {
    return collectionData(
      collection(this.firestore, 'trip_names')
    ) as Observable<ITrip[]>;
  }
}
