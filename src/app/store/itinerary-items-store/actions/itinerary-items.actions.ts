import { createAction, props } from '@ngrx/store';
import { ItineraryItem } from 'src/app/models/itinerary-item';

export const getItineraryItems = createAction(
  '[ItineraryItems] ItineraryItems ItineraryItemss'
);

export const getItineraryItemsSuccess = createAction(
  '[ItineraryItems] get ItineraryItems Success',
  props<{ itineraryItems: ItineraryItem[] }>()
);
