import { NgModule } from '@angular/core';

import { FullNameImpurePipe } from '@features/pipes/pipes/full-name-impure.pipe';
import { FullNamePurePipe } from '@features/pipes/pipes/full-name-pure.pipe';

@NgModule({
  declarations: [
    FullNamePurePipe,
    FullNameImpurePipe,
  ],
  imports: [],
  exports: [
    FullNamePurePipe,
    FullNameImpurePipe,
  ],
})
export class PipesModule { }
