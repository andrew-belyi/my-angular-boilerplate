import { InjectionToken } from '@angular/core';

import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { IRouterState } from '@core/store/reducers/router.reducer';

export interface ICoreStoreState {
  router: RouterReducerState<IRouterState>;
}

export const CORE_STORE_FEATURE = 'Core store feature';

export const CORE_STORE_STATE: ActionReducerMap<ICoreStoreState> = {
  router: routerReducer,
};

export const CORE_STORE_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<ICoreStoreState>>(CORE_STORE_FEATURE, {
  factory: () => (CORE_STORE_STATE),
});
