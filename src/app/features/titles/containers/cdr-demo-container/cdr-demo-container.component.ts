import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { IPerson } from '../../interfaces/person.interface';

@Component({
  selector: 'app-cdr-demo-container',
  templateUrl: './cdr-demo-container.component.html',
  styleUrls: ['./cdr-demo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoContainerComponent implements OnInit {

  personToShow: IPerson;

  private _persons: IPerson[] = [
    {
      firstName: 'Ala',
      lastName: 'Gamora',
      text: 'Ala Gamora',
    },
    {
      firstName: 'Vingardium',
      lastName: 'Mleviossaaaaa',
      text: 'Vingardium Mleviossaaaaa',
    },
    {
      firstName: 'Inpector',
      lastName: 'Patronus',
      text: 'Inspector Patronus',
    },
  ];
  private _index = 0;

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {
    this.personToShow = this._persons[this._index];
  }

  ngOnInit(): void {

  }

  onNextPersonClick(): void {
    this._index += 1;
    if (this._index > 1) {
      this._index = 0;
    }
    this.personToShow = this._persons[this._index];
  }

  onDoSomethingClick(): void {
    console.log('emit change');
    this._cdr.detectChanges();
  }
}
