import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './login.reducer';

export const getLoginState = createFeatureSelector<fromReducer.State>(fromReducer.loginFeatureKey);

export const getUser = createSelector(
    getLoginState,
    (state: fromReducer.State) => state.user
);

export const getIsLoading = createSelector(
    getLoginState,
    (state: fromReducer.State) => state.isLoading
);

export const getIsLogged = createSelector(
    getLoginState,
    (state: fromReducer.State) => state.islogged
);

export const getError = createSelector(
    getLoginState,
    (state: fromReducer.State) => state.error
);

export const getInvalidLogged = createSelector(
    getLoginState,
    (state: fromReducer.State) => state.invalidLogged
);

export const getCustomerCreated = createSelector(
    getLoginState,
    (state: fromReducer.State) => state.customerCreated
);

