import { Component, inject } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.scss'],
})
export class UserCheckComponent {
  auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  user: User | undefined;

  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
    });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription.unsubscribe();
  }
}
