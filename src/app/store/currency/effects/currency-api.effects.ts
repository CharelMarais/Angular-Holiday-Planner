import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, first } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as CurrencyApiActions from '../actions/currency-api.actions';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Injectable()
export class CurrencyApiEffects {
  currencyCurrencyApis$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CurrencyApiActions.getCurrencyApi),
      switchMap(() =>
        this.currencyStore.getCurrencyApiData().pipe(
          first(),
          map((res) =>
            CurrencyApiActions.getCurrencyApiSuccess({
              currencyData: Object.values(res),
            })
          ),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    protected currencyStore: CurrencyService
  ) {}
}
