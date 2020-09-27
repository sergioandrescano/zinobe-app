import { createAction, props } from '@ngrx/store';
import { Bank } from 'src/app/core/models/bank.model';

export const loadBank = createAction(
  '[Layout] Load Bank',
  props<{ id: string }>()
);

export const loadBankSuccess = createAction(
  '[Layout] Load Bank Success',
  props<{ bank: Bank }>()
);

export const loadBankFailure = createAction(
  '[Layout] Load Bank Failure',
  props<{ error: any }>()
);

export const CloseSession = createAction(
  '[Layout] CloseSession'
);
