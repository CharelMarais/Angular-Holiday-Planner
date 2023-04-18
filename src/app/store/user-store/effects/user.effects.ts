import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Injectable()
export class UserEffects {
  userUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getLogedInUser),
      switchMap(() =>
        this.fireAuthService.getUserData().pipe(
          map((res) => UserActions.getLoggedInUserSuccess({ user: res })),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    protected fireAuthService: FirebaseAuthService
  ) {}
}
