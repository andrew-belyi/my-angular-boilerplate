import { NgModule } from '@angular/core';

import { RouterRedirectionPipe } from '@ui/pipes/router-redirection/pipes/router-redirection.pipe';

@NgModule({
  declarations: [
    RouterRedirectionPipe,
  ],
  imports: [],
  exports: [
    RouterRedirectionPipe,
  ],
})
export class RouterRedirectionPipeModule { }
