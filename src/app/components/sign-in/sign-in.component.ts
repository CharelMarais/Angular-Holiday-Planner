import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    protected fireAuthService: FirebaseAuthService,
    private router: Router
  ) {}

  navigateToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
