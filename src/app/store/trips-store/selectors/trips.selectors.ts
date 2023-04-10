import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrips from '../reducers/trips.reducer';

export const selectTripsState = createFeatureSelector<fromTrips.TripsState>(
  fromTrips.tripsFeatureKey
);

export const selectTrips = createSelector(
  selectTripsState,
  (state) => state.trips
);

export const selectSelectedTrip = createSelector(
  selectTripsState,
  (state) => state.selectedTrip
);
