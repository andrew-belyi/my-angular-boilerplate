import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Nullable } from '@core/interfaces/nullable.interface';
import { IServerError } from '@core/interfaces/error.interface';

import * as TitlesActions from '@features/titles/store/actions/titles.action';

import { ITitle } from '@features/titles/interfaces/titles.iterface';

export interface ITitlesState extends EntityState<ITitle> {
  pending: boolean;
  error: Nullable<IServerError>;
  selectedTitleId: Nullable<number>;
}

function selectTitleId(title: ITitle): number {
  return title.id;
}

function sortByTitle(a: ITitle, b: ITitle): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<ITitle> = createEntityAdapter<ITitle>({
  selectId: selectTitleId,
  sortComparer: sortByTitle,
});

export const initialState: ITitlesState = adapter.getInitialState({
  pending: false,
  error: null,
  selectedTitleId: null,
});

const reducer = createReducer<ITitlesState>(
  initialState,
  on(TitlesActions.setTitleAction, (state: ITitlesState, { payload }) => {
    return adapter.setOne(payload, state);
  }),
  on(TitlesActions.loadTitlesAction, (state: ITitlesState) => {
    return {
      ...state,
      error: null,
      pending: true,
    };
  }),
  on(TitlesActions.loadTitlesSuccessAction, (state: ITitlesState, { payload }) => {
    return adapter.setAll(payload, {
      ...state,
      error: null,
      pending: false,
    });
  }),
  on(TitlesActions.loadTitlesErrorAction, (state: ITitlesState, { payload }) => {
    return {
      ...state,
      error: payload,
      pending: false,
    };
  }),
  on(TitlesActions.mapTitlesAction, (state: ITitlesState, { payload }) => {
    return adapter.map(payload, state);
  }),
  on(TitlesActions.addTitleAction, (state: ITitlesState, { payload }) => {
    return adapter.addOne(payload, state);
  }),
  on(TitlesActions.addTitlesAction, (state: ITitlesState, { payload }) => {
    return adapter.addMany(payload, state);
  }),
  on(TitlesActions.upsertTitleAction, (state: ITitlesState, { payload }) => {
    return adapter.upsertOne(payload, state);
  }),
  on(TitlesActions.upsertTitlesAction, (state: ITitlesState, { payload }) => {
    return adapter.upsertMany(payload, state);
  }),
  on(TitlesActions.updateTitleAction, (state: ITitlesState, { payload }) => {
    return adapter.updateOne(payload, state);
  }),
  on(TitlesActions.updateTitlesAction, (state: ITitlesState, { payload }) => {
    return adapter.updateMany(payload, state);
  }),
  on(TitlesActions.deleteTitleAction, (state: ITitlesState, { payload }) => {
    return adapter.removeOne(payload, state);
  }),
  on(TitlesActions.deleteTitlesAction, (state: ITitlesState, { payload }) => {
    return adapter.removeMany(payload, state);
  }),
  on(TitlesActions.deleteTitlesByPredicateAction, (state: ITitlesState, { payload }) => {
    return adapter.removeMany(payload, state);
  }),
  on(TitlesActions.clearTitlesAction, (state: ITitlesState) => {
    return adapter.removeAll({ ...state, selectedUserId: null });
  }),

  on(TitlesActions.selectTitle, (state: ITitlesState, { payload }) => {
    return { ...state, selectedTitleId: payload.id };
  }),
);

export function titlesReducer(state: ITitlesState, action: Action): ITitlesState {
  return reducer(state, action);
}
