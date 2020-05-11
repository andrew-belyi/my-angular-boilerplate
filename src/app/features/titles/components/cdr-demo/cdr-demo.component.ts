import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomEmitter, ICustomEvent } from '@core/services/custom-emitter.service';

import { IPerson } from '@features/titles/interfaces/person.interface';

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
    if (changes.person) {
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
