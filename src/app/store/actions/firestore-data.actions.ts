import { createAction, props } from '@ngrx/store';
import { ItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip } from 'src/app/models/trip-names';

export const getFSFirestoreData = createAction(
  '[FirestoreData] Get FS FirestoreData'
);

export const getFSItineraryItems = createAction(
  '[FirestoreData] Get FS ItineraryItems Complete',
  props<{ itineraryItems: ItineraryItem[] }>()
);

export const getFSTripNames = createAction(
  '[FirestoreData] Get FS TripNames Complete',
  props<{ tripNames: ITrip[] }>()
);
export const setSelectedTrip = createAction(
  '[FirestoreData] Set Selected FS Trip',
  props<{ selectedTripName: ITrip }>()
);
