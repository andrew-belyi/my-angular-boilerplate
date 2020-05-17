import { Pipe, PipeTransform } from '@angular/core';

import { CustomEmitter } from '@core/services/custom-emitter.service';

import { IPerson } from '@features/titles/interfaces/person.interface';

@Pipe({
  name: 'fullNamePure',
})
export class FullNamePurePipe implements PipeTransform {

  constructor(
    private _customEmitter: CustomEmitter,
  ) {}

  transform(person?: IPerson, args?: any): any {
    this._customEmitter.emit('pure');
    return `${person?.firstName} ${person?.lastName}`;
  }
}
