import {
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip } from 'src/app/models/trip-names';
import { FirebaseAuthService } from '../auth/firebase-auth.service';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStoreService {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  itinerary$: Observable<ItineraryItem[]>;
  itineraryCollection: CollectionReference;
  trip_names$: Observable<ITrip[]> | undefined;
  localUser: string | null = localStorage.getItem('user');

  tripCollection: CollectionReference;

  constructor(protected firebaseAuth: FirebaseAuthService) {
    const userItineraryItemCollection = collection(
      this.firestore,
      'itinerary_items'
    );
    this.firebaseAuth.auth.onAuthStateChanged;
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
    userId: string,
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
      userId,
      cost,
    });
  }

  //rxjs store

  getItineraryItems() {
    const colQuery = query(
      this.itineraryCollection,
      where('userId', '==', getAuth().currentUser?.uid)
    );
    return collectionData(colQuery) as Observable<ItineraryItem[]>;
  }

  getTripNames() {
    const colQuery = query(
      this.tripCollection,
      where('userId', '==', getAuth().currentUser?.uid)
    );
    return collectionData(colQuery) as Observable<ITrip[]>;
  }
}
