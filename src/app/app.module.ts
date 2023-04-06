import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserCheckComponent } from './components/user-check/user-check.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { FirestoreAddItemComponent } from './components/firestore-add-item/firestore-add-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { FirestoreListItemsComponent } from './components/firestore-list-items/firestore-list-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US, en_GB } from 'ng-zorro-antd/i18n';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromTrips from './store/trips-store/reducers/trips.reducer';
import { TripsEffects } from './store/trips-store/effects/trips.effects';
import * as fromUser from './store/user-store/reducers/user.reducer';
import { UserEffects } from './store/user-store/effects/user.effects';
import * as fromItineraryItems from './store/itinerary-items-store/reducers/itinerary-items.reducer';
import { ItineraryItemsEffects } from './store/itinerary-items-store/effects/itinerary-items.effects';
import { ListTripsComponent } from './components/list-trips/list-trips.component';
import { AddTripsComponent } from './components/add-trips/add-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserCheckComponent,
    SignInComponent,
    SignOutComponent,
    FirestoreAddItemComponent,
    DashboardComponent,
    ErrorPageComponent,
    LaunchPageComponent,
    FirestoreListItemsComponent,
    NavBarComponent,
    ListTripsComponent,
    AddTripsComponent,
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
    ]),
    StoreModule.forFeature(fromTrips.tripsFeatureKey, fromTrips.reducer),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(
      fromItineraryItems.itineraryItemsFeatureKey,
      fromItineraryItems.reducer
    ),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
