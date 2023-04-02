import { createFeature, createReducer, on } from '@ngrx/store';
import { ItineraryItem } from 'src/app/models/itinerary-item';
import { ITrip } from 'src/app/models/trip-names';
import * as FirestoreDataActions from '../actions/firestore-data.actions';

export const firestoreDataFeatureKey = 'firestoreData';

export interface FsState {
  itineraryItems: ItineraryItem[];
  tripNames: ITrip[];
  selectedTripName: ITrip | null;
}

export const initialState: FsState = {
  itineraryItems: [],
  tripNames: [],
  selectedTripName: null,
};

export const reducer = createReducer(
  initialState,
  on(FirestoreDataActions.getFSItineraryItems, (state, { itineraryItems }) => ({
    ...state,
    itineraryItems,
  })),
  on(FirestoreDataActions.getFSTripNames, (state, { tripNames }) => ({
    ...state,
    tripNames,
  })),
  on(FirestoreDataActions.setSelectedTrip, (state, { selectedTripName }) => ({
    ...state,
    selectedTripName,
  }))
);

export const firestoreDataFeature = createFeature({
  name: firestoreDataFeatureKey,
  reducer,
});
