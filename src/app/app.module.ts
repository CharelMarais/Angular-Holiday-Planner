//General
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Firestore
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
//Components
import { ListItineraryItemsComponent } from './components/list-itinerary-items/list-itinerary-items.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserCheckComponent } from './components/user-check/user-check.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { AddItineraryItemComponent } from './components/add-itinerary-item/add-itinerary-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ListTripsComponent } from './components/list-trips/list-trips.component';
import { AddTripsComponent } from './components/add-trips/add-trips.component';
import { TripListingComponent } from './components/trip-listing/trip-listing.component';
//NG-Zorro
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
//ngrx-store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromTrips from './store/trips-store/reducers/trips.reducer';
import { TripsEffects } from './store/trips-store/effects/trips.effects';
import * as fromUser from './store/user-store/reducers/user.reducer';
import { UserEffects } from './store/user-store/effects/user.effects';
import * as fromItineraryItems from './store/itinerary-items-store/reducers/itinerary-items.reducer';
import { ItineraryItemsEffects } from './store/itinerary-items-store/effects/itinerary-items.effects';
import * as fromCurrencyApi from './store/currency/reducers/currency-api.reducer';
import { CurrencyApiEffects } from './store/currency/effects/currency-api.effects';
import { TripItineraryComponent } from './components/trip-itinerary/trip-itinerary.component';

// Calender

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserCheckComponent,
    SignInComponent,
    SignOutComponent,
    AddItineraryItemComponent,
    DashboardComponent,
    ErrorPageComponent,
    LaunchPageComponent,
    ListItineraryItemsComponent,
    ListTripsComponent,
    AddTripsComponent,
    CalendarComponent,
    TripListingComponent,
    TripItineraryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NzRadioModule,
    NzIconModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzSelectModule,
    NzInputModule,
    NzCalendarModule,
    NzBadgeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forFeature([
      TripsEffects,
      UserEffects,
      ItineraryItemsEffects,
      CurrencyApiEffects,
    ]),
    StoreModule.forFeature(fromTrips.tripsFeatureKey, fromTrips.reducer),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(
      fromItineraryItems.itineraryItemsFeatureKey,
      fromItineraryItems.reducer
    ),
    StoreModule.forFeature(
      fromCurrencyApi.currencyApiFeatureKey,
      fromCurrencyApi.reducer
    ),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
