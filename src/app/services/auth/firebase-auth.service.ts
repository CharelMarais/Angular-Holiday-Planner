import { Injectable, inject, OnInit } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  user,
} from '@angular/fire/auth';

import { Router } from '@angular/router';

import { getAuth } from 'firebase/auth';

import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  auth: Auth = inject(Auth);

  user$ = user(this.auth);

  userSubscription: Subscription;

  constructor(private router: Router) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.

      if (!aUser) {
        this.router.navigate(['launchpage/sign-in']);
      }
    });
  }

  signIn(auth: Auth, email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // Signed in

        this.router.navigate(['dashboard']);

        localStorage.setItem('user', JSON.stringify(response.user));
      })

      .catch((error) => {
        const errorCode = error.code;

        window.alert(error.message);

        console.log(error.message);
      });
  }

  signOut() {
    this.auth.signOut();

    this.router.navigate(['launchpage/sign-in']);

    localStorage.clear();
  }

  signUp(auth: Auth, email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // Signed in

        this.router.navigate(['dashboard']);

        localStorage.setItem('user', JSON.stringify(response.user));
      })

      .catch((error) => {
        const errorCode = error.code;

        window.alert(error.message);

        console.log(error.message);
      });
  }

  getUserData() {
    const userData = this.user$;

    return userData as Observable<User>;
  }
}
