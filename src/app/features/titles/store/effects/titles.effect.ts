import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import { TitlesService } from '@features/titles/services/titles.service';

import { IServerError } from '@core/interfaces/error.interface';

import * as TitlesActions from '@features/titles/store/actions/titles.action';

import { ICoreStoreState } from '@core/store/reducers';
import { ITitle } from '@features/titles/interfaces/titles.iterface';

@Injectable()
export class TitlesEffect {

  loadTitles$ = createEffect(() => this._actions$
    .pipe(
      ofType(TitlesActions.loadTitlesAction),
      switchMap(() => this._titlesService.fetchTitles()
        .pipe(
          map((response: ITitle[]) => {
            // we can run worker if we want
            if (typeof Worker !== 'undefined') {
              // Create a new
              const worker = new Worker('@workers/app.worker', { type: 'module' });
              console.log('run web worker');
              worker.postMessage(3);
              worker.onmessage = ({ data }) => {
                console.log('result: ', data);
                // this._store.dispatch(TitlesActions.setTitleAction(response[0]));
                worker.terminate();
              };
            } else {
              // Web Workers are not supported in this environment.
              // You should add a fallback so that your program still executes correctly.
            }

            return TitlesActions.loadTitlesSuccessAction(response);
          }),
          catchError((error: IServerError) => of(TitlesActions.loadTitlesErrorAction(error))),
        )),
      catchError(error => throwError(error)),
    ));

  constructor(
    private _actions$: Actions,
    private _store: Store<ICoreStoreState>,
    private _titlesService: TitlesService,
  ) {
  }
}
