import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PreloadModuleService {

  private _subject$: Subject<string> = new Subject<string>();

  get moduleToPreload$(): Observable<string> {
    return this._subject$.asObservable();
  }

  startPreload(routePath: string): void {
    this._subject$.next(routePath);
  }
}
