import { createAction, props } from '@ngrx/store';
import { ITrip } from 'src/app/models/trips';

export const getTrips = createAction('[Trips] Get Trips');

export const getTripsSuccess = createAction(
  '[Trips] Get Trips Success',
  props<{ trips: ITrip[] }>()
);

export const setSelectedTrip = createAction(
  '[Trips] Set Selected Trip',
  props<{ selectedTrip: ITrip }>()
);
