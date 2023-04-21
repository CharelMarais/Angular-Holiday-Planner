import { createAction, props } from '@ngrx/store';
import { IItineraryItem } from 'src/app/models/itinerary-item';

export const getItineraryItems = createAction(
  '[ItineraryItems] get ItineraryItems'
);

export const getItineraryItemsSuccess = createAction(
  '[ItineraryItems] get ItineraryItems Success',
  props<{ itineraryItems: IItineraryItem[] }>()
);
