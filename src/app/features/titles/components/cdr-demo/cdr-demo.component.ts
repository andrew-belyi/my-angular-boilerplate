import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomEmitter, ICustomEvent } from '@core/services/custom-emitter.service';

import { IPerson } from '@features/titles/interfaces/person.interface';

/**
 * 1. Change detection mechanism
 *
 * When angular creates an instance of component it needs to create DOM nodes for html elements from template, to track them and
 * in case of destroy remove them from DOM. Angular has a specific data structure for it and it's called View.
 * Every component in Angular under the hood is represented as a View. There is one to one relationship.
 *
 * As a compiler go through the template, it tries to identify the properties of DOM elements that needs to be update during
 * change detection. For each such property Angular creates something called Binding.
 * Binding - is a data structure, that defines two things: what we need to update during change detection and where to get value
 * from (an expression that we specify in a template, ex [textContent]="someControllerPublicMember").
 * !!! So view created for component and a set of bindings, created for that component template are the main building blocks of change
 * detection in Angular !!!
 *
 * When Angular runs change detection for a View (for a Component, but internally Angular works with Views), in other words
 * Checks the View, it runs over all bindings created for that component and evaluate expressions, compare the result of expressions
 * (comparing 'currentValues' with 'previousValues'). There is a property called 'oldValues' in a View, where Angular puts this old
 * result, so he can compare them. If it detects the difference, it updates the DOM. This is a basic mechanism of change detection.
 * !!! This process is known as Dirty Checking !!!
 *
 * So angular evaluates the expression, compare it to previous value, if it's different updated the DOM, also put current value
 * to old values array of View (span.textContent = instance.time; view.oldValues[0] = instance.time).
 *
 * Important to know, that in dev mode, right after dirty checking, Angular synchronously runs and extra check (performs the same steps,
 * as during change detection) to ensure that expression that was evaluated during change detection return the same result.
 * And if it detects the difference it throws an error.
 * In case of current code, it's possible, that during second check, the result of Date.now() will be different in millisecond.
 * !!! This is a place where ExpressionChangedAfterItHasBeenCheckedError occurs !!!
 *
 * How we can avoid such error?
 * So, Angular makes second check synchronously. It means, that we need to update values for expression asynchronously (because in this
 * case it will be triggered after synchronous code, according to main Event Loop functionality)
 *
 * The steps of change detection in Angular:
 * Create View -> Create Bindings -> Process Bindings -> Update DOM -> Run synchronous check (for dev mode)
 *
 * We can check and debug the function in core called 'checkAndUpdateView(view)'
 * There in View we can find next fields:
 * component - our component instance
 * nodes - the references to DOM nodes, created for the template,
 * oldValues - and array, where Angular keeps the result of previous expression evaluation, pipe, etc
 *
 *
 * Also in this example I show how many times change detection mechanism call different types of data binding
 * 1. Using manual calculations (good one)
 * 2. Using getters (bad)
 * 3. Using function (bad)
 * 4. Using pure pipe (very good one)
 * 5. Using impure pipe (bad one)
 */

@Component({
  selector: 'app-cdr-demo',
  templateUrl: './cdr-demo.component.html',
  styleUrls: ['./cdr-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() person: IPerson;

  manualCount = 0;
  getterCount = 0;
  functionCount = 0;
  pureCount = 0;
  impureCount = 0;

  personName: string;

  get time(): number {
    return Date.now();
  }

  // getter
  get fullName(): string {
    this.getterCount += 1;
    return `${this.person.firstName} ${this.person.lastName}`;
  }

  private _subscriber$: Subject<void> = new Subject<void>();

  constructor(
    private _cdr: ChangeDetectorRef,
    private _customEmitter: CustomEmitter,
  ) {
  }

  ngOnInit(): void {
    this.generateFullName();
    this._customEmitter.on('pure', 'impure')
      .pipe(
        takeUntil(this._subscriber$),
      )
      .subscribe((value: ICustomEvent<any>) => {
        if (value.name === 'pure') {
          this.pureCount += 1;
        } else if (value.name === 'impure') {
          this.impureCount += 1;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.person && !changes.person.firstChange) {
      // manual
      this.generateFullName();
    }
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  /**
   *  We need to make separate method for it to call it from OnInit and from OnChanges, so we need to use same peace of code.
   *  If we will use dynamic component generating, we will pass input values manually, and manually call detectChanges.
   *  So it will not trigger OnChanges and will be fired once on OnInit. Once we change input value again, we also need to manually call
   *  generateFullName method to recalculate full name. This is one disadvantage I found compare to pure pipe (which will be called each
   *  detectChanges)
   */
  // manually
  generateFullName(): void {
    if (this.person) {
      this.manualCount += 1;
      this.personName = this.person.firstName + this.person.lastName;
    }
  }

  // function
  getFullName(): string {
    this.functionCount += 1;
    return `${this.person.firstName} ${this.person.lastName}`;
  }

  onMouseOver(): void {
    console.log('mouseover');
  }

  onMouseOut(): void {
    console.log('mouseout');
  }

  onMouseMove(): void {
    console.log('mousemove');
  }

  onDoSomethingClick(): void {
    this._cdr.markForCheck();
  }
}
