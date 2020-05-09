import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';

@NgModule({
  declarations: [
    HeroesPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
})
export class HeroesModule { }
