import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFirestoreData from '../reducers/firestore-data.reducer';

export const selectFirestoreDataState =
  createFeatureSelector<fromFirestoreData.FsState>(
    fromFirestoreData.firestoreDataFeatureKey
  );

export const selectItinaryItem = createSelector(
  selectFirestoreDataState,
  (state) => state.itineraryItems
);

export const selectTripNames = createSelector(
  selectFirestoreDataState,
  (state) => state.tripNames
);
export const selectSelectedTripName = createSelector(
  selectFirestoreDataState,
  (state) => state.selectedTripName
);
