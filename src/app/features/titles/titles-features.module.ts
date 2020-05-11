import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from '@features/pipes/pipes.module';

import { CdrDemoContainerComponent } from './containers/cdr-demo-container/cdr-demo-container.component';
import { ViewsDemoContainerComponent } from './containers/views-demo-container/views-demo-container.component';

import { CdrDemoComponent } from './components/cdr-demo/cdr-demo.component';
import { ViewsDemoComponent } from './components/views-demo/views-demo.component';

@NgModule({
  declarations: [
    CdrDemoContainerComponent,
    CdrDemoComponent,
    ViewsDemoContainerComponent,
    ViewsDemoComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    CdrDemoContainerComponent,
    ViewsDemoContainerComponent,
  ],
})
export class TitlesFeaturesModule {}
