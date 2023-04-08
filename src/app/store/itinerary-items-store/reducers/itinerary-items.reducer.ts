import { createFeature, createReducer, on } from '@ngrx/store';
import { ItineraryItem } from 'src/app/models/itinerary-item';
import * as ItineraryItemsActions from '../actions/itinerary-items.actions';

export const itineraryItemsFeatureKey = 'itineraryItems';

export interface ItineraryItemState {
  itineraryItems: ItineraryItem[];
  isLoading: boolean;
}

export const initialState: ItineraryItemState = {
  itineraryItems: [],
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(ItineraryItemsActions.getItineraryItems, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    ItineraryItemsActions.getItineraryItemsSuccess,
    (state, { itineraryItems }) => ({
      ...state,
      itineraryItems,
      isLoading: false,
    })
  )
);

export const itineraryItemsFeature = createFeature({
  name: itineraryItemsFeatureKey,
  reducer,
});
