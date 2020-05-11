import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TitlesFeaturesModule } from '@features/titles/titles-features.module';
import { TitlesRoutingModule } from './titles-routing.module';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';

@NgModule({
  declarations: [
    TitlesPageComponent,
  ],
  imports: [
    CommonModule,
    TitlesRoutingModule,
    TitlesFeaturesModule,
  ],
})
export class TitlesModule {}
