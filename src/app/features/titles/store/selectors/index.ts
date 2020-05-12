import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITitlesStoreState, TITLES_STORE_FEATURE } from '@features/titles/store/reducers';

export const selectTitlesStoreState = createFeatureSelector<ITitlesStoreState>(TITLES_STORE_FEATURE);
export const selectTitlesState = createSelector(selectTitlesStoreState, (state: ITitlesStoreState) => state.titles);
