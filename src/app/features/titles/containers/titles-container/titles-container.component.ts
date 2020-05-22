import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { loadTitlesAction } from '@features/titles/store/actions/titles.action';

import { ITitlesState } from '@features/titles/store/reducers/titles.reducer';

import {
  selectAllTitles,
  selectTitlesEntities,
  selectTitlesIds,
  selectTitlesTotal,
} from '@features/titles/store/selectors/titles.selector';

@Component({
  selector: 'app-titles-container',
  templateUrl: './titles-container.component.html',
  styleUrls: ['./titles-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitlesContainerComponent implements OnInit, OnDestroy {

  titlesIds$: Observable<any> = this._store.pipe(select(selectTitlesIds));
  selectTitlesEntities$: Observable<any> = this._store.pipe(select(selectTitlesEntities));
  selectAllTitles$: Observable<any> = this._store.pipe(select(selectAllTitles));
  selectTitlesTotal$: Observable<any> = this._store.pipe(select(selectTitlesTotal));

  private _subscriber$: Subject<void> = new Subject<void>();

  constructor(
    private _store: Store<ITitlesState>,
  ) { }

  ngOnInit(): void {
    this._store.dispatch(loadTitlesAction());

    this.titlesIds$
      .pipe(takeUntil(this._subscriber$))
      .subscribe((value) => {
        console.log('titlesIds$: ', value);
      });

    this.selectTitlesEntities$
      .pipe(takeUntil(this._subscriber$))
      .subscribe((value) => {
        console.log('selectTitlesEntities$: ', value);
      });

    this.selectAllTitles$
      .pipe(takeUntil(this._subscriber$))
      .subscribe((value) => {
        console.log('selectAllTitles$: ', value);
      });

    this.selectTitlesTotal$
      .pipe(takeUntil(this._subscriber$))
      .subscribe((value) => {
        console.log('selectTitlesTotal$: ', value);
      });
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  trackByFn(index: number, id: number): number {
    return id;
  }
}
