// General
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { ListItineraryItemsComponent } from '../../components/list-itinerary-items/list-itinerary-items.component';
import { SignOutComponent } from '../../components/sign-out/sign-out.component';
import { AddItineraryItemComponent } from '../../components/add-itinerary-item/add-itinerary-item.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { ListTripsComponent } from '../../components/list-trips/list-trips.component';
import { AddTripsComponent } from '../../components/add-trips/add-trips.component';
import { TripListingComponent } from '../../components/trip-listing/trip-listing.component';
import { TripItineraryComponent } from '../../components/trip-itinerary/trip-itinerary.component';
import { ItemListingComponent } from '../../components/item-listing/item-listing.component';
import { TagIconDisplayComponent } from '../../components/tag-icon-display/tag-icon-display.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DashboardRootComponent } from './dashboard-root.component';

// NG-Zorro
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Ngrx-store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTrips from '../../store/trips-store/reducers/trips.reducer';
import { TripsEffects } from '../../store/trips-store/effects/trips.effects';
import * as fromItineraryItems from '../../store/itinerary-items-store/reducers/itinerary-items.reducer';
import { ItineraryItemsEffects } from '../../store/itinerary-items-store/effects/itinerary-items.effects';
import * as fromCurrencyApi from '../../store/currency/reducers/currency-api.reducer';
import { CurrencyApiEffects } from '../../store/currency/effects/currency-api.effects';

// Pipes
import { OrderByPipe } from '../../pipes/order-by.pipe';

@NgModule({
  declarations: [
    SignOutComponent,
    DashboardComponent,
    AddItineraryItemComponent,
    ListItineraryItemsComponent,
    ListTripsComponent,
    AddTripsComponent,
    CalendarComponent,
    TripListingComponent,
    TripItineraryComponent,
    ItemListingComponent,
    TagIconDisplayComponent,
    DashboardRootComponent,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NzIconModule,
    ReactiveFormsModule,
    NzSelectModule,
    EffectsModule.forFeature([
      TripsEffects,
      ItineraryItemsEffects,
      CurrencyApiEffects,
    ]),
    StoreModule.forFeature(fromTrips.tripsFeatureKey, fromTrips.reducer),
    StoreModule.forFeature(
      fromItineraryItems.itineraryItemsFeatureKey,
      fromItineraryItems.reducer
    ),
    StoreModule.forFeature(
      fromCurrencyApi.currencyApiFeatureKey,
      fromCurrencyApi.reducer
    ),
  ],
})
export class DashboardModule {}
