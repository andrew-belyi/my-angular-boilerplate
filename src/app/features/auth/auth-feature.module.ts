import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginContainerComponent } from './containers/login-container/login-container.component';

import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginContainerComponent,
  ],
})
export class AuthFeatureModule { }
