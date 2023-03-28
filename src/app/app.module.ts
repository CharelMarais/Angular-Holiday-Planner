import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserCheckComponent } from './components/user-check/user-check.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { FirestoreAddItemComponent } from './components/firestore-add-item/firestore-add-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
