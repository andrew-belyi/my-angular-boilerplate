import { EntityMap, Predicate, Update } from '@ngrx/entity';
import { createAction } from '@ngrx/store';

import { IServerError } from '@core/interfaces/error.interface';

import { ITitle } from '@features/titles/interfaces/titles.iterface';
import { createPayload } from '@core/utils/create-payload';

enum ActionTypes {
  SetTitle = '[Titles/API] Set Title',
  LoadTitles = '[Titles/API] Load Titles',
  LoadTitlesSuccess = '[Titles/API] Load Titles Success',
  LoadTitlesError = '[Titles/API] Load Titles Error',
  MapTitles = '[Titles/API] Map Titles',
  AddTitle = '[Titles/API] Add Title',
  AddTitles = '[Titles/API] Add Titles',
  UpsertTitle = '[Titles/API] Upsert Title',
  UpsertTitles = '[Titles/API] Upsert Titles',
  UpdateTitle = '[Titles/API] Update Title',
  UpdateTitles = '[Titles/API] Update Titles',
  DeleteTitle = '[Titles/API] Delete Title',
  DeleteTitles = '[Titles/API] Delete Titles',
  DeleteTitlesByPredicate = '[Titles/API] Delete Titles By Predicate',
  ClearTitles = '[Titles/API] Clear Titles',

  SelectTitle = '[Titles] Select title',
}

export const setTitleAction = createAction(ActionTypes.SetTitle, createPayload<ITitle>());
export const loadTitlesAction = createAction(ActionTypes.LoadTitles);
export const loadTitlesSuccessAction = createAction(ActionTypes.LoadTitlesSuccess, createPayload<ITitle[]>());
export const loadTitlesErrorAction = createAction(ActionTypes.LoadTitlesError, createPayload<IServerError>());
export const mapTitlesAction = createAction(ActionTypes.MapTitles, createPayload<EntityMap<ITitle>>());
export const addTitleAction = createAction(ActionTypes.AddTitle, createPayload<ITitle>());
export const addTitlesAction = createAction(ActionTypes.AddTitles, createPayload<ITitle[]>());
export const upsertTitleAction = createAction(ActionTypes.UpsertTitle, createPayload<ITitle>());
export const upsertTitlesAction = createAction(ActionTypes.UpsertTitles, createPayload<ITitle[]>());
export const updateTitleAction = createAction(ActionTypes.UpdateTitle, createPayload<Update<ITitle>>());
export const updateTitlesAction = createAction(ActionTypes.UpdateTitles, createPayload<Update<ITitle>[]>());
export const deleteTitleAction = createAction(ActionTypes.DeleteTitle, createPayload<number>());
export const deleteTitlesAction = createAction(ActionTypes.DeleteTitles, createPayload<number[]>());
export const deleteTitlesByPredicateAction = createAction(ActionTypes.DeleteTitlesByPredicate, createPayload<Predicate<ITitle>>());
export const clearTitlesAction = createAction(ActionTypes.ClearTitles);

export const selectTitle = createAction(ActionTypes.SelectTitle, createPayload<ITitle>());
