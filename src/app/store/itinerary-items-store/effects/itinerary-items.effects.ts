import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, first, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as ItineraryItemsActions from '../actions/itinerary-items.actions';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';
import { FirebaseAuthService } from 'src/app/services/auth/firebase-auth.service';

@Injectable()
export class ItineraryItemsEffects {
  itineraryItems$ = createEffect(() => {
    return this.firebaseAuth.user$.pipe(
      switchMap(() =>
        this.actions$.pipe(
          ofType(ItineraryItemsActions.getItineraryItems),
          switchMap(() =>
            this.firebaseStore.getItineraryItemsStore().pipe(
              first(),
              map((res) =>
                ItineraryItemsActions.getItineraryItemsSuccess({
                  itineraryItems: res,
                })
              ),
              catchError((error) => {
                console.error(error);
                return EMPTY;
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    protected firebaseStore: FirebaseStoreService,
    protected firebaseAuth: FirebaseAuthService
  ) {}
}
