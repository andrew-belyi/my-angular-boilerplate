import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomEmitter } from './core/services/custom-emitter.service';
import { DocumentRef } from './core/services/document-ref.service';
import { PreloadModuleService } from './core/services/preloadModule.service';
import { WindowRef } from './core/services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'my-angular-boilerplate';

  private _subscriber$: Subject<void> = new Subject<void>();

  constructor(
    private _windowRef: WindowRef,
    private _documentRef: DocumentRef,
    private _customEmitter: CustomEmitter,
    private _preloadModuleService: PreloadModuleService,
  ) {}

  ngOnInit(): void {
    // console.log(this._windowRef);
    // console.log(this._windowRef.nativeElement);
    // console.log(this._documentRef);
    // console.log(this._documentRef.nativeElement);

    // this._customEmitter.emit('test', { name: 'Lol' });
    // this._customEmitter.on('test')
    //   .pipe(
    //     takeUntil(this._subscriber$),
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  preloadModule(routePath: string): void {
    this._preloadModuleService.startPreload(routePath);
  }
}
