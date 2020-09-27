import { Action, createReducer, on } from '@ngrx/store';
import * as CreditsActions from './credits.actions';

export const creditsFeatureKey = 'credits';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(CreditsActions.loadCreditss, state => state),
  on(CreditsActions.loadCreditssSuccess, (state, action) => state),
  on(CreditsActions.loadCreditssFailure, (state, action) => state),

);

