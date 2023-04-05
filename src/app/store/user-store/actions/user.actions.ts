import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

export const getLogedInUser = createAction('[User] get User');

export const getLoggedInUserSuccess = createAction(
  '[User] Get User Success',
  props<{ user: User | null }>()
);
