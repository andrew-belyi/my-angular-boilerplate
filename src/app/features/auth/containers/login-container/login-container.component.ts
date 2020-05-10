import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { IPerson } from '@features/auth/interfaces/person.interface';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {

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
  ];
  private _index = 0;

  constructor(
    private _cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.personToShow = this._persons[this._index];
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
