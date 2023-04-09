import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrencyObject } from 'src/app/models/currency-api';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencyApiData() {
    const currencyData$ = this.http.get<ICurrencyObject>(
      'api-currency-data/currency.json'
    );
    return currencyData$.pipe(switchMap(async (item) => item.data));
  }
}
