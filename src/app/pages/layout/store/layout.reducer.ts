import { Action, createReducer, on } from '@ngrx/store';
import { Bank } from 'src/app/core/models/bank.model';
import * as LayoutActions from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface State {
  bank: Bank,
  isLoading: boolean,
  error: any
}

export const initialState: State = {
  bank: null,
  isLoading: false,
  error: null
};


export const reducer = createReducer(
  initialState,

  on(LayoutActions.loadBank, (state, { id }) => ({
    ...state,
    isLoading: true
  })),
  on(LayoutActions.loadBankSuccess, (state, { bank }) => ({
    ...state,
    bank,
    isLoading: false
  })),
  on(LayoutActions.loadBankFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),

);

