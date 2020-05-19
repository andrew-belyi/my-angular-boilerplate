import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { CdrDemoComponent } from '@features/titles/components/cdr-demo/cdr-demo.component';

import { IPerson } from '@features/titles/interfaces/person.interface';

import { Device } from '@ui/layout/constants/layout.constatns';

@Component({
  selector: 'app-views-demo',
  templateUrl: './views-demo.component.html',
  styleUrls: ['./views-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsDemoComponent implements OnInit, AfterViewInit {

  // https://indepth.dev/here-is-how-to-get-viewcontainerref-before-viewchild-query-is-evaluated/
  // https://hackernoon.com/exploring-angular-dom-abstractions-80b3ebcfc02

  // static: true/false - depending on this we can use it in ngOnInit or in ngOnAfterViewInit
  @ViewChild('elemStaticRef', { read: ElementRef, static: true }) elemStaticRef?: ElementRef;
  @ViewChild('elemRef', { read: ElementRef }) elemRef?: ElementRef;

  @ViewChild('tempStaticRef', { read: TemplateRef, static: true }) tempStaticRef?: TemplateRef<any>;
  @ViewChild('tempRef', { read: TemplateRef }) tempRef?: TemplateRef<any>;

  @ViewChild('viewContainerControllerRef', { read: ViewContainerRef }) viewContainerControllerRef?: ViewContainerRef;
  @ViewChild('viewContainerTemplateRef', { read: ViewContainerRef }) viewContainerTemplateRef?: ViewContainerRef;

  readonly devices = Device;

  constructor(
    private _hostElementRef: ElementRef,
    private _hostViewContainerRef: ViewContainerRef,
    private _injector: Injector,
    private _cfr: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    console.log('---------------ON INIT------------');
    // console.log('Host ElementRef: ', this._hostElementRef);
    // console.log('Host ViewContainerRef: ', this._hostViewContainerRef);
    //
    // console.log('ElementRef static: ', this.elemStaticRef);
    //
    // console.log('TemplateRef static: ', this.tempStaticRef);

    // if (this.viewContainerControllerRef && this.tempStaticRef) {
    //   this.viewContainerControllerRef.insert(this.tempStaticRef.createEmbeddedView(null)); // same
    //   this.viewContainerControllerRef.createEmbeddedView(this.tempStaticRef); // same
    // }
  }

  ngAfterViewInit(): void {
    console.log('----------AFTER VIEW INIT----------');
    // console.log('Host ElementRef: ', this._hostElementRef);
    // console.log('Host ViewContainerRef: ', this._hostViewContainerRef);
    //
    // console.log('ElementRef not static: ', this.elemRef);
    //
    // console.log('TemplateRef not static: ', this.tempRef);
    // console.log('TemplateRef has elementRef field with reference to host element: ', this.tempRef.elementRef);
    // console.log('TemplateRef has createEmbeddedView method, which returns ViewRef: ', this.tempRef.createEmbeddedView(null));
    //
    // console.log('ViewContainerControllerRef: ', this.viewContainerControllerRef);
    //
    // // insert ViewRef created by TemplateRef into ViewContainerRef (manually in component class)
    // // we can use ngTemplateOutlet to make same in template
    // if (this.viewContainerControllerRef && this.tempRef) {
    //   this.viewContainerControllerRef.insert(this.tempRef.createEmbeddedView(null)); // same
    //   this.viewContainerControllerRef.createEmbeddedView(this.tempRef); // same
    // }
    //
    // const factory = this._cfr.resolveComponentFactory(SomeComponent);
    // let componentRef = null;
    // if (this.viewContainerControllerRef) {
    //   componentRef = this.viewContainerControllerRef.createComponent(factory);
    //   componentRef.changeDetectorRef.detectChanges();
    // }
  }

}

@Component({
  selector: 'app-some',
  template: `
        <span>{{name}}</span>
    `,
})
export class SomeComponent {
  name = 'I am B component';

  constructor() {
  }
}
