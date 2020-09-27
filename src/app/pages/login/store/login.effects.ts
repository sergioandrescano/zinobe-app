import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LoginActions from './login.actions';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';



@Injectable()
export class LoginEffects {

  authentication$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.Authentication),
      concatMap((props) => this.apiService.authentication(props.user).pipe(
        map(response => {
          if (response.status === 200)
            return LoginActions.AuthenticationSuccess({ user: response.body.user });
          else
            return LoginActions.AuthenticationFailure();
        }),
        catchError(error => of(LoginActions.AuthenticationError({ error }))))
      )
    );
  });

  createCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.CreateCustomer),
      concatMap((props) => this.apiService.createCustomer(props.user).pipe(
        map(response => {
          if (response.status === 201)
            return LoginActions.CreateCustomerSuccess({ user: response.body.user });
          else
            return LoginActions.CreateCustomerFailure({ error: null });
        }),
        catchError(error => of(LoginActions.CreateCustomerFailure({ error }))))
      )
    );
  });

  authenticationSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.AuthenticationSuccess),
      tap(() => this.router.navigate(['home']))
    ),
    { dispatch: false }
  );

  authenticationFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.AuthenticationFailure),
      tap(() => {

        this.router.navigate(['home']);
      })
    ),
    { dispatch: false }
  );



  constructor(private actions$: Actions, private apiService: ApiService, private router: Router) { }

}
