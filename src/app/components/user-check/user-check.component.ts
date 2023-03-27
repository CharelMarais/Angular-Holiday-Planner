import { Component, OnDestroy } from '@angular/core';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.scss'],
})
export class UserCheckComponent implements OnDestroy {
  constructor(protected fireAuthService: FirebaseAuthService) {}

  ngOnDestroy() {
    this.fireAuthService.userSubscription.unsubscribe();
  }
}
