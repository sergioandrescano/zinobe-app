import { Injectable } from '@angular/core';
import * as fromReducer from '../store/layout.reducer';
import * as fromActions from '../store/layout.actions';
import * as fromSelectors from '../store/layout.selectors';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Bank } from 'src/app/core/models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private store: Store<fromReducer.State>) { }

  loadBank() {
    this.store.dispatch(fromActions.loadBank({id:'1234'}));
  }

  closeSession() {
    this.store.dispatch(fromActions.CloseSession());
  }

  getState(): Observable<fromReducer.State> {
    return this.store.pipe(select(fromSelectors.getLayoutState));
  }

  getIsLoading(): Observable<boolean> {
    return this.store.pipe(select(fromSelectors.getIsLoading));
  }

  getBank(): Observable<Bank> {
    return this.store.pipe(select(fromSelectors.getBank));
  }
}
