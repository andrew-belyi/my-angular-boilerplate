import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutHelperModule } from '@ui/layout/layout-helper.module';
import { TitlesStoreModule } from '@features/titles/store/titles-store.module';
import { FullNamePipesModule } from '@ui/pipes/full-name/full-name-pipes.module';
import { RouterRedirectionPipeModule } from '@ui/pipes/router-redirection/router-redirection-pipe.module';

import { CdrDemoContainerComponent } from './containers/cdr-demo-container/cdr-demo-container.component';
import { ViewsDemoContainerComponent } from './containers/views-demo-container/views-demo-container.component';
import { TitlesContainerComponent } from './containers/titles-container/titles-container.component';
import { CdrDemoTwoContainerComponent } from './containers/cdr-demo-two-container/cdr-demo-two-container.component';
import { ZoneContainerComponent } from './containers/zone-container/zone-container.component';

import { CdrDemoComponent } from './components/cdr-demo/cdr-demo.component';
import { SomeComponent, ViewsDemoComponent } from './components/views-demo/views-demo.component';
import { CdrDemoTwoComponent } from './components/cdr-demo-two/cdr-demo-two.component';
import { ZoneComponent } from './components/zone/zone.component';

@NgModule({
  declarations: [
    CdrDemoContainerComponent,
    CdrDemoComponent,
    ViewsDemoContainerComponent,
    ViewsDemoComponent,
    SomeComponent,
    TitlesContainerComponent,
    CdrDemoTwoContainerComponent,
    CdrDemoTwoComponent,
    ZoneComponent,
    ZoneContainerComponent,
  ],
  imports: [
    CommonModule,
    TitlesStoreModule,
    RouterModule,
    FullNamePipesModule,
    LayoutHelperModule,
    RouterRedirectionPipeModule,
  ],
  exports: [
    CdrDemoContainerComponent,
    ViewsDemoContainerComponent,
    TitlesContainerComponent,
    CdrDemoTwoContainerComponent,
    ZoneContainerComponent,
  ],
})
export class TitlesFeatureModule {}
