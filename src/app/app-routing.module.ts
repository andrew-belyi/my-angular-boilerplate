import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './core/pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

import { PreloadCustomStrategy } from './core/services/preload-custom-strategy.service';

import { AuthGuard } from './routes/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule),
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () => import('./routes/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    // data: { preload: true },
  },
  {
    path: 'heroes',
    loadChildren: () => import('./routes/heroes/heroes.module').then(m => m.HeroesModule),
    // data: { preload: true },
  },
  {
    path: 'titles',
    loadChildren: () => import('./routes/titles/titles.module').then(m => m.TitlesModule),
    // data: { preload: true },
  },
  {
    path: '**',
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
