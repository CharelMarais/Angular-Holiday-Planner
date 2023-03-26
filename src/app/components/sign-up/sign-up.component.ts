import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/shared/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(protected fireAuthService: FirebaseAuthService) {}
}
