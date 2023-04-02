import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as FirestoreDataActions from '../actions/firestore-data.actions';
import { FirebaseStoreService } from 'src/app/services/store/firebase-store.service';

@Injectable()
export class FirestoreDataEffects {
  getFSItineraryItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FirestoreDataActions.getFSFirestoreData),
      switchMap(() =>
        this.firebaseStore.getItineraryItems().pipe(
          map((res) =>
            FirestoreDataActions.getFSItineraryItems({ itineraryItems: res })
          ),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          })
        )
      )
    );
  });

  getFSTripNames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FirestoreDataActions.getFSFirestoreData),
      switchMap(() =>
        this.firebaseStore.getTripNames().pipe(
          map((res) => FirestoreDataActions.getFSTripNames({ tripNames: res })),
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
    protected firebaseStore: FirebaseStoreService
  ) {}
}
