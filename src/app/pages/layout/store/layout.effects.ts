import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LayoutActions from './layout.actions';
import { Router } from '@angular/router';



@Injectable()
export class LayoutEffects {


  closeSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.CloseSession),
      tap(() => this.router.navigate(['login']))),
    { dispatch: false }
  );



  constructor(private actions$: Actions, private router: Router) { }

}
