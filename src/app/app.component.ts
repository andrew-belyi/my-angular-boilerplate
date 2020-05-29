import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomEmitter, ICustomEvent } from '@core/services/custom-emitter.service';
import { DocumentRef } from '@core/services/document-ref.service';
import { WindowRef } from '@core/services/window-ref.service';
import { PreloadModuleService } from '@core/services/preload-module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {

  title = 'My Angular Boilerplate';

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

    // this._customEmitter.emit<number>('test', 1);
    // this._customEmitter.emit<number>('test2', 2);
    // this._customEmitter.on<number>('test', 'test2')
    //   .pipe(
    //     takeUntil(this._subscriber$),
    //   )
    //   .subscribe((value: ICustomEvent<number>) => {
    //     console.log(value);
    //   });
    // this._customEmitter.emit<number>('test2', 2);
    // this._customEmitter.emit<number>('test3', 3);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  preloadModule(routePath: string): void {
    this._preloadModuleService.startPreload(routePath);
  }
}
