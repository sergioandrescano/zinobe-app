import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const Authentication = createAction(
  '[Login] Authentication',
  props<{ user: User }>()
);

export const AuthenticationSuccess = createAction(
  '[Login] Authentication Success',
  props<{ user: User }>()
);

export const AuthenticationFailure = createAction(
  '[Login] Authentication Failure'
);

export const AuthenticationError = createAction(
  '[Login] Authentication Error',
  props<{ error: any }>()
);

export const CreateCustomer = createAction(
  '[Login] CreateCustomer',
  props<{ user: User }>()
);

export const CreateCustomerSuccess = createAction(
  '[Login] CreateCustomer Success',
  props<{ user: User }>()
);

export const CreateCustomerFailure = createAction(
  '[Login] CreateCustomer Failure',
  props<{ error: any }>()
);

export const ClearCustomerCreated = createAction(
  '[Login] ClearCustomerCreated'
);

export const ClearState = createAction(
  '[Login] Clear state'
);
