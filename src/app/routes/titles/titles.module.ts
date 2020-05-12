import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TitlesFeatureModule } from '@features/titles/titles-feature.module';
import { TitlesRoutingModule } from './titles-routing.module';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';
import { CdrDemoPageComponent } from './pages/cdr-demo-page/cdr-demo-page.component';
import { ViewsDemoPageComponent } from './pages/views-demo-page/views-demo-page.component';

@NgModule({
  declarations: [
    TitlesPageComponent,
    CdrDemoPageComponent,
    ViewsDemoPageComponent,
  ],
  imports: [
    CommonModule,
    TitlesRoutingModule,
    TitlesFeatureModule,
  ],
})
export class TitlesModule {}
