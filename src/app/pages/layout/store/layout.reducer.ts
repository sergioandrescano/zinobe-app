import { Action, createReducer, on } from '@ngrx/store';
import * as LayoutActions from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface State {
  isLoading: boolean,
  error: any
}

export const initialState: State = {
  isLoading: false,
  error: null
};


export const reducer = createReducer(
  initialState,

  on(LayoutActions.loadLayouts, state => state),
  on(LayoutActions.loadLayoutsSuccess, (state, action) => state),
  on(LayoutActions.loadLayoutsFailure, (state, action) => state),

);

