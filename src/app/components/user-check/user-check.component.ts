import { Component, OnDestroy } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.scss'],
})
export class UserCheckComponent {
  constructor(protected fireAuthService: FirebaseAuthService) {}
}
