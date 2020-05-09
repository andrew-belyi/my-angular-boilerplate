import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocumentRef {

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  get nativeElement(): Document {
    return this._document;
  }
}
