import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';

export interface State {
  user: User,
  isLoading: boolean,
  islogged: boolean,
  error: any
}

export const initialState: State = {
  user: null,
  isLoading: false,
  islogged: false,
  error: null
};


export const reducer = createReducer(
  initialState,

  on(LoginActions.Authentication, (state, {user}) => ({
    ...state,
    user,
    isLoading: true
  })),
  on(LoginActions.AuthenticationSuccess, (state, {user}) => ({
    ...state,
    user,
    isLoading: false,
    islogged: true
  })),
  on(LoginActions.AuthenticationFailure, (state, {error}) => ({
    ...state,
    user: null,
    isLoading: false,
    islogged: false,
    error
  })),

);

