import {
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  DocumentReference,
} from '@angular/fire/firestore';

import { Firestore } from '@angular/fire/firestore';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ItineraryItem {
  name: string;
  tag: string;
  startDate: string;
  endDate: string;
  cost: string;
  startLocation?: string;
  endLocation?: string;
  notes?: string;
}

@Component({
  selector: 'app-firestore-add-item',
  templateUrl: './firestore-add-item.component.html',
  styleUrls: ['./firestore-add-item.component.scss'],
})
export class FirestoreAddItemComponent {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  itinerary$: Observable<ItineraryItem[]> | undefined;
  itineraryCollection!: CollectionReference;

  constructor() {
    // get a reference to the itinerary collection
    const userProfileCollection = collection(this.firestore, 'itinerary_item');
    this.itineraryCollection = userProfileCollection;

    // get documents (data) from the collection using collectionData
    this.itinerary$ = collectionData(userProfileCollection) as Observable<
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
