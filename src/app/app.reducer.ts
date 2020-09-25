import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export interface AppState {
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>
  ('Root reducers token', {
    factory: () => ({
    }),
  });
