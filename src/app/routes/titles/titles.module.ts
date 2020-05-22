import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TitlesFeatureModule } from '@features/titles/titles-feature.module';
import { TitlesRoutingModule } from './titles-routing.module';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';
import { CdrDemoPageComponent } from './pages/cdr-demo-page/cdr-demo-page.component';
import { ViewsDemoPageComponent } from './pages/views-demo-page/views-demo-page.component';
import { CdrDemoTwoPageComponent } from './pages/cdr-demo-two-page/cdr-demo-two-page.component';
import { ZonePageComponent } from './pages/zone-page/zone-page.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';

@NgModule({
  declarations: [
    TitlesPageComponent,
    CdrDemoPageComponent,
    CdrDemoTwoPageComponent,
    ViewsDemoPageComponent,
    ZonePageComponent,
    TitlePageComponent,
  ],
  imports: [
    CommonModule,
    TitlesRoutingModule,
    TitlesFeatureModule,
  ],
})
export class TitlesModule {}
