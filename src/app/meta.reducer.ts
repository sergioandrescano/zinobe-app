import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromLoginReducer from 'src/app/pages/login/store/login.reducer';
import * as fromLayoutReducer from 'src/app/pages/layout/store/layout.reducer';
import * as fromLoginActions from 'src/app/pages/login/store/login.actions';
import { storeReset } from 'ngrx-store-reset';


export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [fromLoginReducer.loginFeatureKey, fromLayoutReducer.layoutFeatureKey],
    rehydrate: true,
  })(reducer);
}


export function storeResetMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return storeReset({ action: fromLoginActions.ClearState.type })(reducer);
}


export const metaReducers: MetaReducer<any>[] = [
  localStorageSyncReducer,
  storeResetMetaReducer
];
