import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { IRouterState } from '@core/store/reducers/router.reducer';

export class CustomRouterStateSerializer implements RouterStateSerializer<IRouterState> {
  serialize(routerState: RouterStateSnapshot): IRouterState {
    // TODO finish with it
    // console.log(routerState.root);
    const { url } = routerState;
    // const { queryParams } = routerState.root;
    //
    // let lastRoute: ActivatedRouteSnapshot = routerState.root;
    // let { params, data } = lastRoute;
    //
    // while (lastRoute.firstChild) {
    //   lastRoute = lastRoute.firstChild;
    //   params = { ...params, ...lastRoute.params };
    //   data = { ...data, ...lastRoute.data };
    // }

    // return { url, params, queryParams, data };
    return { url };
  }
}
