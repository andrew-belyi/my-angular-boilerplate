import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';
import { CdrDemoPageComponent } from '@routes/titles/pages/cdr-demo-page/cdr-demo-page.component';
import { ViewsDemoPageComponent } from '@routes/titles/pages/views-demo-page/views-demo-page.component';
import { CdrDemoTwoPageComponent } from '@routes/titles/pages/cdr-demo-two-page/cdr-demo-two-page.component';
import { ZonePageComponent } from '@routes/titles/pages/zone-page/zone-page.component';
import { TitlePageComponent } from '@routes/titles/pages/title-page/title-page.component';

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
    path: TitlesPath.TitleId,
    component: TitlePageComponent,
  },
  {
    path: TitlesPath.CdrDemo,
    component: CdrDemoPageComponent,
  },
  {
    path: TitlesPath.CdrDemo2,
    component: CdrDemoTwoPageComponent,
  },
  {
    path: TitlesPath.ViewsRefDemo,
    component: ViewsDemoPageComponent,
  },
  {
    path: TitlesPath.Zone,
    component: ZonePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitlesRoutingModule {}
