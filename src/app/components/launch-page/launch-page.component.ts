import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss'],
})
export class LaunchPageComponent {
  constructor(
    protected fireAuthService: FirebaseAuthService,
    private router: Router
  ) {}

  navigateToSignUp() {
    this.router.navigate(['sign-up']);
  }

  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }
  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
