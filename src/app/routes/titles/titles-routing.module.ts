import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';
import { CdrDemoPageComponent } from '@routes/titles/pages/cdr-demo-page/cdr-demo-page.component';
import { ViewsDemoPageComponent } from '@routes/titles/pages/views-demo-page/views-demo-page.component';

import { TitlesPath } from '@routes/titles/constants/route.constant';

const routes: Routes = [
  {
    path: TitlesPath.Empty,
    pathMatch: 'full',
    redirectTo: TitlesPath.All,
  },
  {
    path: TitlesPath.All,
    component: TitlesPageComponent,
  },
  {
    path: TitlesPath.CdrDemo,
    component: CdrDemoPageComponent,
  },
  {
    path: TitlesPath.ViewsRefDemo,
    component: ViewsDemoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitlesRoutingModule {}
