import { NgModule } from '@angular/core';

import { AuthFeaturesModule } from '@features/auth/auth-features.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    AuthFeaturesModule,
  ],
})
export class AuthModule { }
