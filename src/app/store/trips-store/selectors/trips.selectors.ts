import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrips from '../reducers/trips.reducer';

export const selectTripsState = createFeatureSelector<fromTrips.TripsState>(
  fromTrips.tripsFeatureKey
);

export const selectTripNames = createSelector(
  selectTripsState,
  (state) => state.trips
);

export const selectSelectedTripName = createSelector(
  selectTripsState,
  (state) => state.selectedTrip
);
