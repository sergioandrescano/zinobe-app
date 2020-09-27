import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CreditsActions from './credits.actions';



@Injectable()
export class CreditsEffects {

  loadCreditss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CreditsActions.loadCreditss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CreditsActions.loadCreditssSuccess({ data })),
          catchError(error => of(CreditsActions.loadCreditssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
