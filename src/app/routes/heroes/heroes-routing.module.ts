import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
