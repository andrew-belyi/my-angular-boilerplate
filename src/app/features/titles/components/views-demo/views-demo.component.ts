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

  @ViewChild('elemStaticRef', { read: ElementRef, static: true }) elemStaticRef: ElementRef;
  @ViewChild('elemRef', { read: ElementRef }) elemRef: ElementRef;

  @ViewChild('tempStaticRef', { read: TemplateRef, static: true }) tempStaticRef: TemplateRef<any>;
  @ViewChild('tempRef', { read: TemplateRef }) tempRef: TemplateRef<any>;

  @ViewChild('viewContainerControllerRef', { read: ViewContainerRef }) viewContainerControllerRef: ViewContainerRef;
  @ViewChild('viewContainerTemplateRef', { read: ViewContainerRef }) viewContainerTemplateRef: ViewContainerRef;

  readonly devices = Device;

  cdrDemoComponent = CdrDemoComponent;
  person: IPerson = {
    firstName: 'Dynamic',
    lastName: 'Component',
    text: 'Person',
  };

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
  }

  ngAfterViewInit(): void {
    console.log('---------------AFTER VIEW INIT------------');
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
    // this.viewContainerControllerRef.insert(this.tempRef.createEmbeddedView(null)); // same
    this.viewContainerControllerRef.createEmbeddedView(this.tempRef); // same
    //
    // // creating other component (one way)
    // // resolving factory
    // const factory = this._cfr.resolveComponentFactory(CdrDemoComponent);
    // // provide current injector instance
    // const componentRef = factory.create(this._injector);
    // // setting component inputs data
    // (<CdrDemoComponent> componentRef.instance).person = { firstName: 'first', lastName: 'last', text: 'text' };
    // this.viewContainerControllerRef.insert(componentRef.hostView);
    //
    // // creating other component (second way)
    // const factory = this._cfr.resolveComponentFactory(CdrDemoComponent);
    // const componentRef = this.viewContainerControllerRef.createComponent(factory);
    // (<CdrDemoComponent> componentRef.instance).person = person;
    // componentRef.changeDetectorRef.detectChanges();
    // (<CdrDemoComponent> componentRef.instance).person = { firstName: '1', lastName: '2', text: '3' };
    // (<CdrDemoComponent> componentRef.instance).generateFullName();
    // componentRef.changeDetectorRef.detectChanges();
  }

}
