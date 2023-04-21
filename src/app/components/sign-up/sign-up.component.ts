import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    protected fireAuthService: FirebaseAuthService,
    private fb: FormBuilder
  ) {}

  signUpForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signUpSubmit() {
    this.fireAuthService.signUp(
      this.fireAuthService.auth,
      this.signUpForm.get('email')?.value as string,
      this.signUpForm.get('password')?.value as string
    );
  }
}
