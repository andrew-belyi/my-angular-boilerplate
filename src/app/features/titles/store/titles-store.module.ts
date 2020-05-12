import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TITLES_STORE_FEATURE, TITLES_STORE_REDUCERS_TOKEN, TITLES_STORE_STATE } from '@features/titles/store/reducers';
import { TITLES_STORE_EFFECTS } from '@features/titles/store/effects';

@NgModule({
  imports: [
    StoreModule.forFeature(TITLES_STORE_FEATURE, TITLES_STORE_REDUCERS_TOKEN),
    EffectsModule.forFeature(TITLES_STORE_EFFECTS),
  ],
  providers: [
    {
      provide: TITLES_STORE_REDUCERS_TOKEN,
      useValue: TITLES_STORE_STATE,
    },
  ],
})
export class TitlesStoreModule {}
