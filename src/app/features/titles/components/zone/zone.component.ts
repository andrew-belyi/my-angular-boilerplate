import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';

import 'zone.js';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneComponent implements OnInit {

  constructor(
    private _zone: NgZone,
  ) { }

  ngOnInit(): void {
    console.log(this._zone);
    // console.log('Zone.current (angular zone): ', Zone.current);
    // console.log('Zone.current.parent (root zone): ', Zone.current.parent);
    // console.log('Zone.current.parent.parent (null): ', Zone.current.parent.parent);
    // console.log('---------------------------------------------------------------');

    const myFirstZone = Zone.current.fork({
      name: 'My first test zone',
      properties: {
        test: 'My first zone test property',
      },

      onFork(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, zoneSpec: ZoneSpec): Zone {
        console.log('Fork was called');

        return parentZoneDelegate.fork(targetZone, zoneSpec);
      },

      onIntercept(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, source: string): Function {
        console.log('Interception was called');

        return parentZoneDelegate.intercept(targetZone, delegate, source);
      },

      onInvoke(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function,
               applyThis: any, applyArgs?: any[], source?: string): any {
        console.log('Run was called');
        console.log('Delegate: ', delegate);

        return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
      },

      onHandleError(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, error: any): boolean {
        console.log('Error handler was called');

        return parentZoneDelegate.handleError(targetZone, error);
      },

      onScheduleTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task): Task {
        console.log('Async task was called, the callback will be called later');
        console.log('Callback: ', task.callback);
        // task.callback is function that will be called after async

        return parentZoneDelegate.scheduleTask(targetZone, task);
      },

      onInvokeTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone,
                   task: Task, applyThis: any, applyArgs?: any[]): any {
        console.log('The callback from async task was called');
        console.log('Callback: ', task.callback);

        return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
      },

      onCancelTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task): any {
        console.log('Cancel task was called');

        return parentZoneDelegate.cancelTask(targetZone, task);
      },

      onHasTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, hasTaskState: HasTaskState): void {
        console.log('On has task was called');
        console.log(hasTaskState);

        return parentZoneDelegate.hasTask(targetZone, hasTaskState);
      },
    });

    myFirstZone.run(() => {
      setTimeout((text: string) => {
        console.log('Hello from run after 2 seconds: ', text);
      }, 2000);
    });
    // console.log('myFirstZone.name: ', myFirstZone.name);
    // console.log('myFirstZone.parent: ', myFirstZone.parent);
    // console.log('myFirstZone.parent === Zone.current', myFirstZone.parent === Zone.current);
    // console.log('myFirstZone.get(\'test\'): ', myFirstZone.get('test'));

    // const mySecondZone = myFirstZone.fork({
    //   name: 'My second test zone'
    // });
    // console.log('mySecondZone.name: ', mySecondZone.name);
    // console.log('mySecondZone.parent: ', mySecondZone.parent);
  }
}

// !!!!!!!!!!!!!!!!!!!!! ANGULAR ZONE FORK FROM PARENT ZONE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!! zone - instance of singleton NgZone !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function checkStable(zone) {
//   if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
//     try {
//       zone._nesting++;
//       zone.onMicrotaskEmpty.emit(null);
//     }
//     finally {
//       zone._nesting--;
//       if (!zone.hasPendingMicrotasks) {
//         try {
//           zone.runOutsideAngular(function () { return zone.onStable.emit(null); });
//         }
//         finally {
//           zone.isStable = true;
//         }
//       }
//     }
//   }
// }
//
// function forkInnerZoneWithAngularBehavior(zone) {
//   zone._inner = zone._inner.fork({
//     name: 'angular',
//     properties: { 'isAngularZone': true },
//     onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
//       try {
//         onEnter(zone);
//         return delegate.invokeTask(target, task, applyThis, applyArgs);
//       }
//       finally {
//         onLeave(zone);
//       }
//     },
//     onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
//       try {
//         onEnter(zone);
//         return delegate.invoke(target, callback, applyThis, applyArgs, source);
//       }
//       finally {
//         onLeave(zone);
//       }
//     },
//     onHasTask: function (delegate, current, target, hasTaskState) {
//       delegate.hasTask(target, hasTaskState);
//       if (current === target) {
//         // We are only interested in hasTask events which originate from our zone
//         // (A child hasTask event is not interesting to us)
//         if (hasTaskState.change == 'microTask') {
//           zone.hasPendingMicrotasks = hasTaskState.microTask;
//           checkStable(zone);
//         }
//         else if (hasTaskState.change == 'macroTask') {
//           zone.hasPendingMacrotasks = hasTaskState.macroTask;
//         }
//       }
//     },
//     onHandleError: function (delegate, current, target, error) {
//       delegate.handleError(target, error);
//       zone.runOutsideAngular(function () { return zone.onError.emit(error); });
//       return false;
//     }
//   });
// }
// function onEnter(zone) {
//   zone._nesting++;
//   if (zone.isStable) {
//     zone.isStable = false;
//     zone.onUnstable.emit(null);
//   }
// }
// function onLeave(zone) {
//   zone._nesting--;
//   checkStable(zone);
// }

// !!!!!!!!!!!!!!! NgZone CONSTRUCTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var NgZone = /** @class */ (function () {
//   function NgZone(_a) {
//     var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
//     this.hasPendingMicrotasks = false;
//     this.hasPendingMacrotasks = false;
//     /**
//      * Whether there are no outstanding microtasks or macrotasks.
//      */
//     this.isStable = true;
//     /**
//      * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
//      */
//     this.onUnstable = new EventEmitter(false);
//     /**
//      * Notifies when there is no more microtasks enqueued in the current VM Turn.
//      * This is a hint for Angular to do change detection, which may enqueue more microtasks.
//      * For this reason this event can fire multiple times per VM Turn.
//      */
//     this.onMicrotaskEmpty = new EventEmitter(false);
//     /**
//      * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
//      * implies we are about to relinquish VM turn.
//      * This event gets called just once.
//      */
//     this.onStable = new EventEmitter(false);
//     /**
//      * Notifies that an error has been delivered.
//      */
//     this.onError = new EventEmitter(false);
//     if (typeof Zone == 'undefined') {
//       throw new Error("In this configuration Angular requires Zone.js");
//     }
//     Zone.assertZonePatched();
//     var self = this;
//     self._nesting = 0;
//     self._outer = self._inner = Zone.current;
//     if (Zone['wtfZoneSpec']) {
//       self._inner = self._inner.fork(Zone['wtfZoneSpec']);
//     }
//     if (Zone['TaskTrackingZoneSpec']) {
//       self._inner = self._inner.fork(new Zone['TaskTrackingZoneSpec']);
//     }
//     if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
//       self._inner = self._inner.fork(Zone['longStackTraceZoneSpec']);
//     }
//     forkInnerZoneWithAngularBehavior(self);
//   }
//   NgZone.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
//   NgZone.assertInAngularZone = function () {
//     if (!NgZone.isInAngularZone()) {
//       throw new Error('Expected to be in Angular Zone, but it is not!');
//     }
//   };
//   NgZone.assertNotInAngularZone = function () {
//     if (NgZone.isInAngularZone()) {
//       throw new Error('Expected to not be in Angular Zone, but it is!');
//     }
//   };
//   /**
//    * Executes the `fn` function synchronously within the Angular zone and returns value returned by
//    * the function.
//    *
//    * Running functions via `run` allows you to reenter Angular zone from a task that was executed
//    * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
//    *
//    * Any future tasks or microtasks scheduled from within this function will continue executing from
//    * within the Angular zone.
//    *
//    * If a synchronous error happens it will be rethrown and not reported via `onError`.
//    */
//   NgZone.prototype.run = function (fn, applyThis, applyArgs) {
//     return this._inner.run(fn, applyThis, applyArgs);
//   };
//   /**
//    * Executes the `fn` function synchronously within the Angular zone as a task and returns value
//    * returned by the function.
//    *
//    * Running functions via `run` allows you to reenter Angular zone from a task that was executed
//    * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
//    *
//    * Any future tasks or microtasks scheduled from within this function will continue executing from
//    * within the Angular zone.
//    *
//    * If a synchronous error happens it will be rethrown and not reported via `onError`.
//    */
//   NgZone.prototype.runTask = function (fn, applyThis, applyArgs, name) {
//     var zone = this._inner;
//     var task = zone.scheduleEventTask('NgZoneEvent: ' + name, fn, EMPTY_PAYLOAD, noop$1, noop$1);
//     try {
//       return zone.runTask(task, applyThis, applyArgs);
//     }
//     finally {
//       zone.cancelTask(task);
//     }
//   };
//   /**
//    * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
//    * rethrown.
//    */
//   NgZone.prototype.runGuarded = function (fn, applyThis, applyArgs) {
//     return this._inner.runGuarded(fn, applyThis, applyArgs);
//   };
//   /**
//    * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
//    * the function.
//    *
//    * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
//    * work that
//    * doesn't trigger Angular change-detection or is subject to Angular's error handling.
//    *
//    * Any future tasks or microtasks scheduled from within this function will continue executing from
//    * outside of the Angular zone.
//    *
//    * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
//    */
//   NgZone.prototype.runOutsideAngular = function (fn) {
//     return this._outer.run(fn);
//   };
//   return NgZone;
// }());
