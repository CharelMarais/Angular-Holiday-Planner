import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrencyApi from '../reducers/currency-api.reducer';

export const selectCurrencyApiState =
  createFeatureSelector<fromCurrencyApi.currencyState>(
    fromCurrencyApi.currencyApiFeatureKey
  );

export const selectCurrencyApi = createSelector(
  selectCurrencyApiState,
  (state) => state.currencyData
);
