import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, skip, tap } from 'rxjs/operators';

export interface ICustomEvent<T> {
  name: string;
  data?: T;
}

@Injectable({ providedIn: 'root' })
export class CustomEmitter {

  private readonly _emitter$: BehaviorSubject<ICustomEvent<any>> = new BehaviorSubject<ICustomEvent<any>>({ name: 'initial' });

  public get emitter(): Observable<ICustomEvent<any>> {
    return this._emitter$.asObservable();
  }

  public on<T>(...listenNames: string[]): Observable<ICustomEvent<T>> {
    return this.emitter.pipe(
      filter(({ name }) => listenNames.includes(name)),
    );
  }

  public emit<T>(name: string, data?: T): void {
    this._emitter$.next({ name, data } as ICustomEvent<T>);
  }
}
