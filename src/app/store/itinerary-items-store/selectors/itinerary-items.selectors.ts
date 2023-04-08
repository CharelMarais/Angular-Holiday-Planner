import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItineraryItems from '../reducers/itinerary-items.reducer';

export const selectItineraryItemsState =
  createFeatureSelector<fromItineraryItems.ItineraryItemState>(
    fromItineraryItems.itineraryItemsFeatureKey
  );

export const selectItinaryItem = createSelector(
  selectItineraryItemsState,
  (state) => state.itineraryItems
);
