import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppErrorInterceptor implements HttpInterceptor {

  private readonly _router = this._injector.get(Router);

  constructor(private readonly _injector: Injector) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    return next
      .handle(req)
      .pipe(
        catchError((error) => {
          switch (error && error.status) {
            case 401:

              break;
            case 403: {

              break;
            }
            case 404:
              // this._router.navigate(); // TODO page not found
              break;
            case 500: {

              break;
            }
            case 502:

              break;
            case 503:

              break;
          }

          return throwError(error);
        }),
      );
  }
}
