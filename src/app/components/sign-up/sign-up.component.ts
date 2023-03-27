import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    protected fireAuthService: FirebaseAuthService,
    private router: Router
  ) {}

  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }
}
