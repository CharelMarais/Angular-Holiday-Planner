import {
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  Firestore,
  query,
  where,
  deleteDoc,
  getDocs,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip } from 'src/app/models/trips';
import { FirebaseAuthService } from '../auth/firebase-auth.service';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStoreService {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  itinerary$: Observable<IItineraryItem[]>;
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
      IItineraryItem[]
    >;

    const userTripCollection = collection(this.firestore, 'trip_names');
    this.tripCollection = userTripCollection;
    this.trip_names$ = collectionData(userTripCollection) as Observable<
      ITrip[]
    >;
  }

  addTrip(tripName: string, userId: string) {
    if (tripName) {
      addDoc(this.tripCollection, <ITrip>{ tripName, userId });
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
    addDoc(this.itineraryCollection, <IItineraryItem>{
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
    return collectionData(colQuery) as Observable<IItineraryItem[]>;
  }

  getTripNames() {
    const colQuery = query(
      this.tripCollection,
      where('userId', '==', getAuth().currentUser?.uid)
    );
    return collectionData(colQuery) as Observable<ITrip[]>;
  }

  async deleteTripByTripName(tripName: string) {
    const tripsQuery = query(
      this.tripCollection,
      where('tripName', '==', tripName),
      where('userId', '==', getAuth().currentUser?.uid)
    );

    const tripDocs = await getDocs(tripsQuery);

    tripDocs.forEach((tripDoc) => {
      console.log(tripDoc);
      deleteDoc(tripDoc.ref);
    });
  }

  async updateTripByTripName(tripName: string, updatedTripName: string) {
    const tripsQuery = query(
      this.tripCollection,
      where('tripName', '==', tripName),
      where('userId', '==', getAuth().currentUser?.uid)
    );
    const tripDocs = await getDocs(tripsQuery);

    tripDocs.forEach((tripDoc) => {
      updateDoc(doc(this.tripCollection, tripDoc.id), {
        ['tripName']: updatedTripName,
      });
    });
  }
}
