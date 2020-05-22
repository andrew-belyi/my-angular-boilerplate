import { NgModule } from '@angular/core';

import { FullNameImpurePipe } from '@ui/pipes/full-name/pipes/full-name-impure.pipe';
import { FullNamePurePipe } from '@ui/pipes/full-name/pipes/full-name-pure.pipe';

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
export class FullNamePipesModule { }
