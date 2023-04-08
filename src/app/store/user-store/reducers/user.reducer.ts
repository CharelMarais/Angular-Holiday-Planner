import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from 'firebase/auth';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  user: User | null;
  isloading: boolean;
}

export const initialState: UserState = {
  user: null,
  isloading: false,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.getLogedInUser, (state) => ({ ...state, isloading: true })),
  on(UserActions.getLoggedInUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isloading: false,
  }))
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});
