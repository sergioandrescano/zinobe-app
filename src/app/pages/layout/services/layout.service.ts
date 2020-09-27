import { Injectable } from '@angular/core';
import * as fromReducer from '../store/layout.reducer';
import * as fromActions from '../store/layout.actions';
import * as fromSelectors from '../store/layout.selectors';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private store: Store<fromReducer.State>) { }

  
  closeSession(){
    this.store.dispatch(fromActions.CloseSession());
  }
  
  getState(): Observable<fromReducer.State>{
    return this.store.pipe(select(fromSelectors.getLayoutState));
  }
  
  getIsLoading(): Observable<boolean>{
    return this.store.pipe(select(fromSelectors.getIsLoading));
  }
  }
