import { createFeature, createReducer, on } from '@ngrx/store';
import { ITrip } from 'src/app/models/trip-names';
import * as TripsActions from '../actions/trips.actions';

export const tripsFeatureKey = 'trips';

export interface TripsState {
  trips: ITrip[];
  selectedTrip: ITrip | string;
  isLoading: boolean;
}

export const initialState: TripsState = {
  trips: [],
  selectedTrip: '',
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(TripsActions.getTrips, (state) => ({ ...state, isLoading: true })),
  on(TripsActions.getTripsSuccess, (state, { trips }) => ({ ...state, trips })),
  on(TripsActions.setSelectedTrip, (state, { selectedTrip }) => ({
    ...state,
    selectedTrip,
    isLoading: false,
  }))
);

export const tripsFeature = createFeature({
  name: tripsFeatureKey,
  reducer,
});
