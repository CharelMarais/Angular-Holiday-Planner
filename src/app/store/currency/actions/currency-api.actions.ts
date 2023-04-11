import { createAction, props } from '@ngrx/store';
import { IConversionData } from 'src/app/models/currency-api';

export const getCurrencyApi = createAction('[CurrencyApi]  Get CurrencyApi');

export const getCurrencyApiSuccess = createAction(
  '[CurrencyApi] Get CurrencyApi Success',
  props<{ currencyData: IConversionData[] }>()
);
