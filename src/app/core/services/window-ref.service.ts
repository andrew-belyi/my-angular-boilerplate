import { Inject, Injectable, InjectionToken } from '@angular/core';

export const WINDOW_TOKEN = new InjectionToken<Window>('Window');

@Injectable({ providedIn: 'root' })
export class WindowRef {

  constructor(@Inject(WINDOW_TOKEN) private readonly _window: Window) {}

  get nativeElement(): Window {
    return this._window;
  }
}

export function windowFactory(): Window {
  if (window) {
    return window;
  }

  throw new Error('window not defined');
}
