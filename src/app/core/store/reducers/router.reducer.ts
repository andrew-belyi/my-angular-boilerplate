import { Data, Params } from '@angular/router';

import { BaseRouterStoreState } from '@ngrx/router-store';

export interface IRouterState extends BaseRouterStoreState {
  url: string;
  params?: Params;
  queryParams?: Params;
  data?: Data;
}
