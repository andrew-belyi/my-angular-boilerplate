import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface ICustomEvent<T> {
  name: string;
  data?: T;
}

@Injectable({ providedIn: 'root' })
export class CustomEmitter {

  // @ts-ignore
  private readonly _emitter$: BehaviorSubject<ICustomEvent<any>> = new BehaviorSubject<ICustomEvent<any>>(null);

  public get emitter(): Observable<ICustomEvent<any>> {
    return this._emitter$.asObservable();
  }

  public on<T>(...emitNames: string[]): Observable<ICustomEvent<T>> {
    return this.emitter.pipe(
      filter(event => !!event),
      filter(({ name }) => emitNames.includes(name)),
    );
  }

  public emit<T>(name: string, data?: T): void {
    this._emitter$.next({ name, data } as ICustomEvent<T>);
  }
}
