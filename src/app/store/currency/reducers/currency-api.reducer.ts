import { state } from '@angular/animations';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ICurrencyData } from 'src/app/models/currency-api';
import * as CurrencyApiActions from '../actions/currency-api.actions';

export const currencyApiFeatureKey = 'currencyApi';

export interface currencyState {
  currencyData: ICurrencyData | string;
  isLoading: boolean;
}

export const initialState: currencyState = {
  currencyData: '',
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(CurrencyApiActions.getCurrencyApi, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CurrencyApiActions.getCurrencyApiSuccess, (state, { currencyData }) => ({
    ...state,
    currencyData,
    isLoading: false,
  }))
);

export const currencyApiFeature = createFeature({
  name: currencyApiFeatureKey,
  reducer,
});
