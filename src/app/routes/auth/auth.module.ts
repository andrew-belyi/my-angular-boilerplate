import { NgModule } from '@angular/core';

import { AuthFeatureModule } from '@features/auth/auth-feature.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    AuthFeatureModule,
  ],
})
export class AuthModule { }
