import { createFeature, createReducer, on } from '@ngrx/store';
import { IConversionData } from 'src/app/models/currency-api';
import * as CurrencyApiActions from '../actions/currency-api.actions';

export const currencyApiFeatureKey = 'currencyApi';

export interface CurrencyState {
  currencyData: IConversionData[];
  isLoading: boolean;
}

export const initialState: CurrencyState = {
  currencyData: [{ code: '', value: 0 }],
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
