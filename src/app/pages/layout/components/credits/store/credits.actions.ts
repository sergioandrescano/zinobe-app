import { createAction, props } from '@ngrx/store';

export const loadCreditss = createAction(
  '[Credits] Load Creditss'
);

export const loadCreditssSuccess = createAction(
  '[Credits] Load Creditss Success',
  props<{ data: any }>()
);

export const loadCreditssFailure = createAction(
  '[Credits] Load Creditss Failure',
  props<{ error: any }>()
);
