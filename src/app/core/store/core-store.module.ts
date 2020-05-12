import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '@env/environment';

import { CORE_STORE_REDUCERS_TOKEN } from '@core/store/reducers';
import { CustomRouterStateSerializer } from '@core/utils/custom-router-state-serializer';
import { CORE_STORE_EFFECTS } from '@core/store/effects';

@NgModule({
  imports: [
    StoreModule.forRoot(CORE_STORE_REDUCERS_TOKEN, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomRouterStateSerializer,
    }),
    EffectsModule.forRoot(CORE_STORE_EFFECTS),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
})
export class CoreStoreModule { }
