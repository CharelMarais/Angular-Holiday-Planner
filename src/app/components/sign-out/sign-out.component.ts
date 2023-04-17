import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent {
  constructor(protected fireAuthService: FirebaseAuthService) {}
  @Input() signingOut!: boolean;
  @Output() signingOutChange = new EventEmitter<boolean>();

  cancelSignOut() {
    this.signingOutChange.emit(!this.signingOut);
  }
}
