import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrencyObject } from 'src/app/models/currency-api';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencyApiData() {
    const currencyData$ = this.http.get<ICurrencyObject>(
      'assets/currency.json'
    );
    return currencyData$.pipe(switchMap(async (item) => item.data));
  }
}
