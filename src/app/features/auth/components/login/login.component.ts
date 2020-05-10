import {
  ChangeDetectorRef,
  Component,
  HostBinding, HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Pipe,
  PipeTransform,
  SimpleChanges,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomEmitter, ICustomEvent } from '@core/services/custom-emitter.service';

import { IPerson } from '@features/auth/interfaces/person.interface';

@Pipe({
  name: 'fullNamePure',
})
export class FullNamePurePipe implements PipeTransform {

  constructor(
    private _customEmitter: CustomEmitter,
  ) {}

  transform(person: IPerson, args?: any): any {
    this._customEmitter.emit('pure');
    return `${person.firstName} ${person.lastName}`;
  }
}

@Pipe({
  name: 'fullNameImpure',
  pure: false,
})
export class FullNameImpurePipe implements PipeTransform {

  constructor(
    private _customEmitter: CustomEmitter,
  ) {}

  transform(person: IPerson, args?: any): any {
    this._customEmitter.emit('impure');
    return `${person.firstName} ${person.lastName}`;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {

  @Input() person: IPerson;

  manualCount = 0;
  getterCount = 0;
  functionCount = 0;
  pureCount = 0;
  impureCount = 0;

  personName: string;

  get fullName(): string {
    this.getterCount += 1;
    return `${this.person.firstName} ${this.person.lastName}`;
  }

  private _subscriber$: Subject<void> = new Subject<void>();

  constructor(
    private _cdr: ChangeDetectorRef,
    private _customEmitter: CustomEmitter,
  ) { }

  ngOnInit(): void {
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
      this.manualCount += 1;
      this.personName = changes.person.currentValue.firstName + changes.person.currentValue.lastName;
    }
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

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

  onLoginClick(): void {
    console.log('login click');
  }
}
