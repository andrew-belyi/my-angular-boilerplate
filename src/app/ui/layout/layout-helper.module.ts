import { NgModule } from '@angular/core';

import { ShowForDirective } from '@ui/layout/directives/showFor.directive';
import { HideForDirective } from '@ui/layout/directives/hideFor.directive';

@NgModule({
  declarations: [
    ShowForDirective,
    HideForDirective,
  ],
  imports: [],
  exports: [
    ShowForDirective,
    HideForDirective,
  ],
})
export class LayoutHelperModule {}
