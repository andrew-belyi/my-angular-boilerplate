import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipesModule } from '@ui/pipes/pipes.module';
import { LayoutHelperModule } from '@ui/layout/layout-helper.module';
import { TitlesStoreModule } from '@features/titles/store/titles-store.module';

import { CdrDemoContainerComponent } from './containers/cdr-demo-container/cdr-demo-container.component';
import { ViewsDemoContainerComponent } from './containers/views-demo-container/views-demo-container.component';
import { TitlesContainerComponent } from './containers/titles-container/titles-container.component';

import { CdrDemoComponent } from './components/cdr-demo/cdr-demo.component';
import { ViewsDemoComponent } from './components/views-demo/views-demo.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    CdrDemoContainerComponent,
    CdrDemoComponent,
    ViewsDemoContainerComponent,
    ViewsDemoComponent,
    TitlesContainerComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    TitlesStoreModule,
    RouterModule,
    PipesModule,
    LayoutHelperModule,
  ],
  exports: [
    CdrDemoContainerComponent,
    ViewsDemoContainerComponent,
    TitlesContainerComponent,
  ],
})
export class TitlesFeatureModule {}
