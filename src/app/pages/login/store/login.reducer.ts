import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';

export interface State {
  user: User,
  invalidLogged: boolean,
  customerCreated: boolean,
  isLoading: boolean,
  islogged: boolean,
  error: any
}

export const initialState: State = {
  user: null,
  invalidLogged: false,
  customerCreated: false,
  isLoading: false,
  islogged: false,
  error: null
};


export const reducer = createReducer(
  initialState,

  on(LoginActions.Authentication, (state, { user }) => ({
    ...state,
    user,
    isLoading: true
  })),
  on(LoginActions.AuthenticationSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    islogged: true
  })),
  on(LoginActions.AuthenticationFailure, (state) => ({
    ...state,
    user: null,
    invalidLogged: true,
    isLoading: false,
    islogged: false,
  })),
  on(LoginActions.AuthenticationError, (state, { error }) => ({
    ...state,
    user: null,
    invalidLogged: true,
    isLoading: false,
    islogged: false,
    error
  })),
  on(LoginActions.CreateCustomer, (state, { user }) => ({
    ...state,
    isLoading: true
  })),
  on(LoginActions.CreateCustomerSuccess, (state, { user }) => ({
    ...state,
    user,
    customerCreated: true,
    isLoading: false,
    islogged: false
  })),
  on(LoginActions.CreateCustomerFailure, (state, { error }) => ({
    ...state,
    user: null,
    customerCreated: false,
    isLoading: false,
    islogged: false,
    error
  })),
  on(LoginActions.ClearCustomerCreated, (state) => ({
    ...state,
    customerCreated: false
  })),

);

