import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { ITitle } from '@features/titles/interfaces/titles.iterface';

@Injectable({ providedIn: 'root' })
export class TitlesService {

  constructor(private _http: HttpClient) {
  }

  fetchTitles(): Observable<ITitle[]> {
    return this._http.get<ITitle[]>(`${ environment.api.titles }`);
  }
}
