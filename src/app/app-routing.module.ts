import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FirestoreAddItemComponent } from './components/firestore-add-item/firestore-add-item.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'launchpage', component: LaunchPageComponent },
  { path: 'dashboard/add-item', component: FirestoreAddItemComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/launchpage', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
