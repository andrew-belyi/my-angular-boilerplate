import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomEmitter } from '@core/services/custom-emitter.service';
import { DocumentRef } from '@core/services/document-ref.service';
import { WindowRef } from '@core/services/window-ref.service';
import { PreloadModuleService } from '@core/services/preload-module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {

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

    // this._customEmitter.emit<ITestData>('test', { name: 'name' });
    // this._customEmitter.emit<ITestData>('test2', { name: 'name2' });
    // this._customEmitter.on<ITestData>('test', 'test2')
    //   .pipe(
    //     takeUntil(this._subscriber$),
    //   )
    //   .subscribe((value: ICustomEvent<ITestData>) => {
    //     console.log(value);
    //   });
    // this._customEmitter.emit<ITestData>('test2', { name: 'name2' });
    // this._customEmitter.emit<ITestData>('test3', { name: 'name3' });
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  preloadModule(routePath: string): void {
    this._preloadModuleService.startPreload(routePath);
  }
}

interface ITestData {
  name: string;
}
