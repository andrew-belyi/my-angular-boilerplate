import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { BehaviorSubject, Observable } from 'rxjs';

import { ILayout } from '@ui/layout/interfaces/layout.interface';

import { Device, Orientation } from '@ui/layout/constants/layout.constatns';

@Injectable({ providedIn: 'root' })
export class LayoutHelperService {

  private _layoutSubject$: BehaviorSubject<ILayout> = new BehaviorSubject<ILayout>({
    device: Device.Web,
    orientation: Orientation.Landscape,
  });

  get layout(): Observable<ILayout> {
    return this._layoutSubject$.asObservable();
  }

  constructor(
    private _breakpointObserver: BreakpointObserver,
  ) {
    _breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.HandsetLandscape]) {
          this._layoutSubject$.next({
            device: Device.Handset,
            orientation: Orientation.Landscape,
          });
        } else if (result.breakpoints[Breakpoints.HandsetPortrait]) {
          this._layoutSubject$.next({
            device: Device.Handset,
            orientation: Orientation.Portrait,
          });
        } else if (result.breakpoints[Breakpoints.TabletLandscape]) {
          this._layoutSubject$.next({
            device: Device.Tablet,
            orientation: Orientation.Landscape,
          });
        } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
          this._layoutSubject$.next({
            device: Device.Tablet,
            orientation: Orientation.Portrait,
          });
        } else if (result.breakpoints[Breakpoints.WebLandscape]) {
          this._layoutSubject$.next({
            device: Device.Web,
            orientation: Orientation.Landscape,
          });
        } else if (result.breakpoints[Breakpoints.WebPortrait]) {
          this._layoutSubject$.next({
            device: Device.Web,
            orientation: Orientation.Portrait,
          });
        }
      } else {
        console.log('Not valid resolution');
      }
    });
  }

}
