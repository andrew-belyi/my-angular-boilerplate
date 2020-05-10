import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PreloadModuleService } from './preloadModule.service';

export declare var navigator;
export const AVOID_CONNECTIONS = ['slow-2g', '2g']; // 3g, 4g

/**
 * This custom strategy provide possibility to preload modules in following cases:
 * 1) Automatically preload lazy loaded module if following conditions are met:
 * 1.1) `preload: true` field exist in route `data
 * 1.2) Network connection is fast enough (at least 3g connection)
 * 1.3) Mobile device is not in save data mode
 * 2) You can manually call preload action using `startPreload` method if `PreloadModuleService`.
 * For example on component init, inside effect, when mouse hover on some element
 *
 * IMPORTANT TO KNOW
 * route `canLoad` will prevent all this logic, 'cause `preload` method of `PreloadingStrategy` will not be fired
 */
@Injectable({ providedIn: 'root' })
export class PreloadCustomStrategy implements PreloadingStrategy {

  constructor(
    private _preloadModuleService: PreloadModuleService,
  ) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // in case of preload if route is pre-loadable by config and conditions
    if (canPreload(route)) {
      return load();
    }
    // in case of preload module manually using service
    return this._preloadModuleService.moduleToPreload$.pipe(
      map((preloadModuleRoutePath: string) => preloadModuleRoutePath === route.path ? load() : EMPTY),
    );
  }
}

function canPreload(route: Route): boolean {
  return hasGoodConnection() && isRoutePreLoadable(route);
}

function hasGoodConnection(): boolean {
  const conn = navigator.connection;
  if (!conn) { return false; }
  if (conn.saveData) { return false; } // if save data mode is enabled - don't preload

  return !AVOID_CONNECTIONS.includes(conn.effectiveType); // if connection is slow - don't preload
}

function isRoutePreLoadable(route: Route): boolean {
  return route && route.data && route.data.preload; // if `preload` field exist and is `true` in router `data`
}
