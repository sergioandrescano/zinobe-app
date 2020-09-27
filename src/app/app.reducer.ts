import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromLogin from 'src/app/pages/login/store/login.reducer';
import * as fromLayout from 'src/app/pages/layout/store/layout.reducer';

export interface AppState {
  login: fromLogin.State,
  layout: fromLayout.State
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>
  ('Root reducers token', {
    factory: () => ({
      login: fromLogin.reducer,
      layout: fromLayout.reducer
    }),
  });
