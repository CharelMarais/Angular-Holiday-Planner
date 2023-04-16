import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss'],
})
export class LaunchPageComponent implements OnInit {
  constructor(
    protected fireAuthService: FirebaseAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.fireAuthService.user$.pipe(map((user) => !!user?.uid))) {
      this.navigateToDashboard();
    }
  }

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
