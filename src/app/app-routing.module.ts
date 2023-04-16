import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AddItineraryItemComponent } from './components/add-itinerary-item/add-itinerary-item.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './gaurds/auth.guard';
import { TripItineraryComponent } from './components/trip-itinerary/trip-itinerary.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'launchpage',
    component: LaunchPageComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  { path: '', redirectTo: '/launchpage/sign-in', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'dashboard/add-item/:tripName',
    component: AddItineraryItemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'trip/:tripName',
    component: TripItineraryComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
