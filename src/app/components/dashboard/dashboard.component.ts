import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    protected fireAuthService: FirebaseAuthService,
    private router: Router
  ) {
    if (this.fireAuthService.user$) {
      this.router.navigate(['sign-in']);
    }
  }

  ngOnInit(): void {}
}
