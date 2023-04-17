import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TripItineraryComponent } from '../../components/trip-itinerary/trip-itinerary.component';
import { AuthGuard } from '../../gaurds/auth.guard';
import { ErrorPageComponent } from '../../components/error-page/error-page.component';
import { DashboardRootComponent } from './dashboard-root.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'trip/:tripName',
        component: TripItineraryComponent,
      },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
