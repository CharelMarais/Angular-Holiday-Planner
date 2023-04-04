import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FirestoreDataEffects } from './firestore-data.effects';

describe('FirestoreDataEffects', () => {
  let actions$: Observable<any>;
  let effects: FirestoreDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirestoreDataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FirestoreDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
