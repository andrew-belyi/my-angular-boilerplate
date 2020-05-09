import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';

const routes: Routes = [
  {
    path: '',
    component: TitlesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitlesRoutingModule {}
