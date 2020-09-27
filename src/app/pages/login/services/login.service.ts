import { Injectable } from '@angular/core';
import * as fromReducer from '../store/login.reducer';
import * as fromActions from '../store/login.actions';
import * as fromSelectors from '../store/login.selectors';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private store: Store<fromReducer.State>) { }

  
  authentication(user: User){
    this.store.dispatch(fromActions.Authentication({user}));
  }
  
  createCustomer(user: User){
    this.store.dispatch(fromActions.CreateCustomer({user}));
  }
  
  clearCustomerCreated(){
    this.store.dispatch(fromActions.ClearCustomerCreated());
  }

  clearState(){
    this.store.dispatch(fromActions.ClearState());
  }
  
  getState(): Observable<fromReducer.State>{
    return this.store.pipe(select(fromSelectors.getLoginState));
  }
  
  getUser(): Observable<User>{
    return this.store.pipe(select(fromSelectors.getUser));
  }
  
  getIsLoading(): Observable<boolean>{
    return this.store.pipe(select(fromSelectors.getIsLoading));
  }
  
  getIsLogged(): Observable<boolean>{
    return this.store.pipe(select(fromSelectors.getIsLogged));
  }
  
  getInvalidLogged(): Observable<boolean>{
    return this.store.pipe(select(fromSelectors.getInvalidLogged));
  }
  
  getCustomerCreated(): Observable<boolean>{
    return this.store.pipe(select(fromSelectors.getCustomerCreated));
  }
}
