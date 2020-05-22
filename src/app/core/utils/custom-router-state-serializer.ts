import { RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { IRouterState } from '@core/store/reducers/router.reducer';

export class CustomRouterStateSerializer implements RouterStateSerializer<IRouterState> {
  serialize(routerState: RouterStateSnapshot): IRouterState {
    const { url } = routerState;
    const { params, data, queryParams } = routerState.root;

    return { url, params, queryParams, data };
  }
}
