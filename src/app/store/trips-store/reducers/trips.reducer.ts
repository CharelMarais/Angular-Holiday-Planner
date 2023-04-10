import { createFeature, createReducer, on } from '@ngrx/store';
import { ITrip } from 'src/app/models/trips';
import * as TripsActions from '../actions/trips.actions';

export const tripsFeatureKey = 'trips';

export interface TripsState {
  trips: ITrip[];
  selectedTrip: ITrip;
  isLoading: boolean;
}

export const initialState: TripsState = {
  trips: [],
  selectedTrip: { tripName: '', userId: '' },
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
