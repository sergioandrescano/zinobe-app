import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './layout.reducer';

export const getLayoutState = createFeatureSelector<fromReducer.State>(fromReducer.layoutFeatureKey);

export const getIsLoading = createSelector(
    getLayoutState,
    (state: fromReducer.State) => state.isLoading
);

export const getBank = createSelector(
    getLayoutState,
    (state: fromReducer.State) => state.bank
);

