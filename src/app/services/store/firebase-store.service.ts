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
import { ItineraryItemState } from 'src/app/store/itinerary-items-store/reducers/itinerary-items.reducer';
import { Store } from '@ngrx/store';
import { TripsState } from 'src/app/store/trips-store/reducers/trips.reducer';
import { getTrips } from 'src/app/store/trips-store/actions/trips.actions';
import { getItineraryItems } from 'src/app/store/itinerary-items-store/actions/itinerary-items.actions';

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

  constructor(
    private itineraryItemStore: Store<ItineraryItemState>,
    private tripStore: Store<TripsState>,
    protected firebaseAuth: FirebaseAuthService
  ) {
    this.tripStore.dispatch(getTrips());
    this.itineraryItemStore.dispatch(getItineraryItems());

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

  addItineraryItem(
    tripName: string,
    name: string,
    tag: string,
    startDate: string,
    endDate: string,
    userId: string,
    cost: number,
    startLocation?: string,
    endLocation?: string,
    notes?: string
  ) {
    if (!(name || tag || startDate || endDate || cost)) return;
    addDoc(this.itineraryCollection, <IItineraryItem>{
      tripName,
      name,
      tag,
      startDate,
      endDate,
      userId,
      cost,
    });
  }

  addTrip(tripName: string, userId: string) {
    if (tripName) {
      addDoc(this.tripCollection, <ITrip>{ tripName, userId });
      this.tripStore.dispatch(getTrips());
    }
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
    this.tripStore.dispatch(getTrips());
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
    this.tripStore.dispatch(getTrips());
  }

  //rxjs store

  getItineraryItemsStore() {
    const colQuery = query(
      this.itineraryCollection,
      where('userId', '==', getAuth().currentUser?.uid)
    );
    return collectionData(colQuery) as Observable<IItineraryItem[]>;
  }

  getTrips() {
    const colQuery = query(
      this.tripCollection,
      where('userId', '==', getAuth().currentUser?.uid)
    );
    return collectionData(colQuery) as Observable<ITrip[]>;
  }
}
