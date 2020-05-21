import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from '@core/pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from '@core/pages/not-found-page/not-found-page.component';

import { PreloadCustomStrategy } from '@core/services/preload-custom-strategy.service';

import { AuthGuard } from '@routes/auth/guards/auth.guard';

import { CorePath } from '@core/constants/route.constant';

// TODO
// router generate functions, routes string as enums - TODO how to generate using manual or pipe output
// ngrx, store-route, go, route change events
// interceptors
// auth guard
// permissions
// web worker
// service worker, app shell
// schematics

const routes: Routes = [
  {
    path: CorePath.Empty,
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: CorePath.Dashboard,
    component: DashboardPageComponent,
  },
  {
    path: CorePath.Auth,
    loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule),
    data: { preload: true },
  },
  {
    path: CorePath.Admin,
    loadChildren: () => import('./routes/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    // data: { preload: true },
  },
  {
    path: CorePath.Heroes,
    loadChildren: () => import('./routes/heroes/heroes.module').then(m => m.HeroesModule),
    // data: { preload: true },
  },
  {
    path: CorePath.Titles,
    loadChildren: () => import('./routes/titles/titles.module').then(m => m.TitlesModule),
    // data: { preload: true },
  },
  {
    path: CorePath.Other,
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadCustomStrategy,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
