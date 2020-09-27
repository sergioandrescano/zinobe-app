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
        }),
        catchError(error => of(LoginActions.AuthenticationFailure({ error }))))
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



  constructor(private actions$: Actions, private apiService: ApiService, private router: Router) { }

}
