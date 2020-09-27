import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LayoutActions from './layout.actions';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';



@Injectable()
export class LayoutEffects {

  loadBank$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LayoutActions.loadBank),
      concatMap((props) => this.apiService.getBankById(props.id).pipe(
        map(response => LayoutActions.loadBankSuccess({ bank: response.body.bank })),
        catchError(error => of(LayoutActions.loadBankFailure({ error }))))
      )
    );
  });

  closeSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.CloseSession),
      tap(() => this.router.navigate(['login']))),
    { dispatch: false }
  );



  constructor(private actions$: Actions, private router: Router, private apiService: ApiService) { }

}
