import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, User } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent {
  auth: Auth = inject(Auth);

  signOut() {
    this.auth.signOut();
  }
}
