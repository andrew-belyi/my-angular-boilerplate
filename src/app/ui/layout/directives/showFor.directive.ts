import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LayoutHelperService } from '@ui/layout/services/layout-helper.service';

import { ILayout } from '@ui/layout/interfaces/layout.interface';

import { Device } from '@ui/layout/constants/layout.constatns';

@Directive({
  selector: '[appShowFor]',
})
export class ShowForDirective implements OnInit, OnDestroy {

  @Input() appShowFor: Device[];

  private _subscriber$: Subject<void> = new Subject<void>();
  private _layout: ILayout;

  constructor(
    private _layoutHelperService: LayoutHelperService,
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>,
  ) {
  }

  ngOnInit(): void {
    this._layoutHelperService.layout
      .pipe(takeUntil(this._subscriber$))
      .subscribe((layout: ILayout) => {
        this._layout = layout;
        if (this.appShowFor.includes(layout.device)) {
          this.show();
        } else {
          this.hide();
        }
      });
  }

  ngOnDestroy(): void {
    this._subscriber$.next();
    this._subscriber$.complete();
  }

  show(): void {
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }

  hide(): void {
    this._viewContainerRef.clear();
  }
}
