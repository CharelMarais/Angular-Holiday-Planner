import { Injectable, inject, OnInit } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  user,
} from '@angular/fire/auth';

import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  auth: Auth = inject(Auth);

  user$ = user(this.auth);

  constructor(private router: Router) {}

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
