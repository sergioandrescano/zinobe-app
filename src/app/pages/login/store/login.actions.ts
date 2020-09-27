import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const Authentication = createAction(
  '[Login] Authentication',
  props<{ user: User }>()
);

export const AuthenticationSuccess = createAction(
  '[Login] Authentication Success',
  props<{ user: User  }>()
);

export const AuthenticationFailure = createAction(
  '[Login] Authentication Failure',
  props<{ error: any }>()
);
