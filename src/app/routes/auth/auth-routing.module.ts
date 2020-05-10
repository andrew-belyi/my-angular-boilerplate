import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';

import { AuthPath } from './constants/route.constants';

const routes: Routes = [
  {
    path: AuthPath.Empty,
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: AuthPath.Login,
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
