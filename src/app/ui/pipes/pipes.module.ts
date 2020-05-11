import { NgModule } from '@angular/core';

import { FullNameImpurePipe } from '@ui/pipes/pipes/full-name-impure.pipe';
import { FullNamePurePipe } from '@ui/pipes/pipes/full-name-pure.pipe';

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
