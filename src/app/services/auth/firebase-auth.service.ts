import { Injectable, inject } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  auth: Auth = inject(Auth);

  user$ = user(this.auth);

  constructor(private router: Router) {}

  signIn(auth: Auth, email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        const errorCode = error.code;
        window.alert(error.message);
      });
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['launchpage/sign-in']);
  }

  signUp(auth: Auth, email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.router.navigate(['dashboard']);
      })

      .catch((error) => {
        const errorCode = error.code;
        window.alert(error.message);
      });
  }
}
