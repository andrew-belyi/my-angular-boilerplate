import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LayoutHelperService } from '@ui/layout/services/layout-helper.service';

import { Device } from '@ui/layout/constants/layout.constatns';

@Directive({
  selector: '[appShowFor]',
})
export class ShowForDirective implements OnInit, OnDestroy {

  @Input() appShowFor: Device[];

  private _subscriber$: Subject<void> = new Subject<void>();

  constructor(
    private _layoutHelperService: LayoutHelperService,
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>,
  ) {
  }

  ngOnInit(): void {
    this._layoutHelperService.layout
      .pipe(takeUntil(this._subscriber$))
      .subscribe((device: Device) => {
        if (this.appShowFor.includes(device)) {
          this.create();
        } else {
          this.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  create(): void {
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }

  clear(): void {
    this._viewContainerRef.clear();
  }
}
