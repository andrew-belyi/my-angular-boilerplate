import { createSelector } from '@ngrx/store';

import * as fromTitle from '@features/titles/store/reducers/titles.reducer';

import { selectTitlesState } from '@features/titles/store/selectors/index';

export const selectTitlesIds = createSelector(
  selectTitlesState,
  fromTitle.selectTitlesIds,
);

export const selectTitlesEntities = createSelector(
  selectTitlesState,
  fromTitle.selectTitlesEntities,
);

export const selectAllTitles = createSelector(
  selectTitlesState,
  fromTitle.selectAllTitles,
);

export const selectTitlesTotal = createSelector(
  selectTitlesState,
  fromTitle.selectTitlesTotal,
);
