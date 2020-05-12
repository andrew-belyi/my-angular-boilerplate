import { InjectionToken } from '@angular/core';

import { ActionReducerMap } from '@ngrx/store';

import { ITitlesState, titlesReducer } from '@features/titles/store/reducers/titles.reducer';

export interface ITitlesStoreState {
  titles: ITitlesState;
}

export const TITLES_STORE_FEATURE = 'titles';

export const TITLES_STORE_STATE: ActionReducerMap<ITitlesStoreState> = {
  titles: titlesReducer,
};

export const TITLES_STORE_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<ITitlesStoreState>>(TITLES_STORE_FEATURE);
