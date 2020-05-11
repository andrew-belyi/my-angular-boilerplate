import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { BehaviorSubject, Observable } from 'rxjs';

import { Breakpoint, Device } from '@ui/layout/constants/layout.constatns';

@Injectable({ providedIn: 'root' })
export class LayoutHelperService {

  private _layoutSubject$: BehaviorSubject<Device> = new BehaviorSubject<Device>(Device.Desktop);

  get layout(): Observable<Device> {
    return this._layoutSubject$.asObservable();
  }

  constructor(
    private _breakpointObserver: BreakpointObserver,
  ) {
    _breakpointObserver.observe([
      Breakpoint.ExtraSmall,
      Breakpoint.Small,
      Breakpoint.Medium,
      Breakpoint.Large,
      Breakpoint.ExtraLarge,
    ]).subscribe((result: BreakpointState) => {
      const { matches, breakpoints } = result;
      if (matches) {
        if (breakpoints[Breakpoint.ExtraSmall] || breakpoints[Breakpoint.Small]) {
          this._layoutSubject$.next(Device.Mobile);
        } else if (breakpoints[Breakpoint.Medium]) {
          this._layoutSubject$.next(Device.Tablet);
        } else if (breakpoints[Breakpoint.Large] || breakpoints[Breakpoint.ExtraLarge]) {
          this._layoutSubject$.next(Device.Desktop);
        }
      } else {
        console.log('Not valid resolution');
      }
    });
  }

}
