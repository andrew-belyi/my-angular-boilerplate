import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { AppErrorInterceptor } from './services/app-error-interceptor.service';
import { appLoaderFactory, AppLoaderService } from './services/app-loader.service';
import { windowFactory, WINDOW_TOKEN } from './services/window-ref.service';

@NgModule({
  declarations: [
    DashboardPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appLoaderFactory,
      deps: [AppLoaderService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppErrorInterceptor,
      multi: true,
    },
    {
      provide: WINDOW_TOKEN,
      useFactory: windowFactory,
    },
    {
      provide: APP_BASE_HREF,
      useValue: './',
    },
  ],
})
export class CoreModule { }
