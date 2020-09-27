import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromReducer from 'src/app/pages/login/store/login.reducer';

export interface AppState {
  login: fromReducer.State
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>
  ('Root reducers token', {
    factory: () => ({
      login: fromReducer.reducer
    }),
  });
