import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email = '';
  password = '';

  constructor(protected fireAuthService: FirebaseAuthService) {}

  login(email: string, password: string) {
    this.fireAuthService.signIn(this.fireAuthService.auth, email, password);
  }
}
