import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);
