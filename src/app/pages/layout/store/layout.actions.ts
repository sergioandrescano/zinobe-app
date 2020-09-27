import { createAction, props } from '@ngrx/store';

export const loadLayouts = createAction(
  '[Layout] Load Layouts'
);

export const loadLayoutsSuccess = createAction(
  '[Layout] Load Layouts Success',
  props<{ data: any }>()
);

export const loadLayoutsFailure = createAction(
  '[Layout] Load Layouts Failure',
  props<{ error: any }>()
);

export const CloseSession = createAction(
  '[Layout] CloseSession'
);
