import { Pipe, PipeTransform } from '@angular/core';

import { CustomEmitter } from '@core/services/custom-emitter.service';

import { IPerson } from '@features/titles/interfaces/person.interface';

@Pipe({
  name: 'fullNameImpure',
  pure: false,
})
export class FullNameImpurePipe implements PipeTransform {

  constructor(
    private _customEmitter: CustomEmitter,
  ) {}

  transform(person?: IPerson, args?: any): any {
    this._customEmitter.emit('impure');
    return `${person?.firstName} ${person?.lastName}`;
  }
}
