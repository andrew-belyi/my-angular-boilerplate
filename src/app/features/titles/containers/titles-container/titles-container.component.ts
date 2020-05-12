import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { clearTitlesAction, loadTitlesAction } from '@features/titles/store/actions/titles.action';

import { ICoreStoreState } from '@core/store/reducers';

@Component({
  selector: 'app-titles-container',
  templateUrl: './titles-container.component.html',
  styleUrls: ['./titles-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitlesContainerComponent implements OnInit {

  constructor(
    private _store: Store<ICoreStoreState>,
  ) { }

  ngOnInit(): void {
    this._store.dispatch(loadTitlesAction());
  }

}
