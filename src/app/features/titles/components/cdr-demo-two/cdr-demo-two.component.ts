import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  SimpleChanges,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

/**
 * Title: ngOnInit and constructor
 *
 * Constructor - is just a part of js/ts class. And the constructor of the component is called when Angular constructs components tree.
 * A class constructor in Angular is mostly used to inject dependencies. Angular calls this constructor injection pattern which is
 * explained in details here: https://angular.io/guide/dependency-injection#when-the-service-needs-a-service.
 *
 * ngOnInit - is just a method on a class which structurally is not different to any other method on a class.
 * All lifecycle hooks including ngOnInit are called as part of the change detection phase.
 * Also @Input communication mechanism is processed as part of change detection phase so input bindings are not available in constructor.
 * Angular calls ngOnInit when it has finished creating a component DOM, injected all required dependencies through constructor and
 * processed input bindings. So here you have all the required information available which makes it a good place to perform
 * initialization logic.
 * It’s a common practice to use ngOnInit to perform initialization logic even if this logic doesn’t depend on DI, DOM or input bindings.
 *
 *
 * Lets describe the following situation:
 * <my-app>
 *  <child-comp [i]='prop'></child-comp>
 * </my-app>
 *
 * So Angular starts bootstrapping the application. As described above it first creates classes for each component.
 * So it calls MyAppComponent constructor. When executing a component constructor Angular resolves all dependencies that are injected into
 * MyAppComponent constructor and provides them as parameters. It also creates a DOM node which is the host element of the my-app component.
 * Then it proceeds to creating a host element for the child-comp and calling ChildComponent constructor. At this stage Angular is not
 * concerned with the i input binding and any lifecycle hooks. So when this process is finished Angular ends up with the following tree of
 * component views:
 *
 *  MyAppView
 *    - MyApp component instance
 *    - my-app host element data
 *      ChildComponentView
 *        - ChildComponent component instance
 *        - child-comp host element data
 *
 * Only then Angular runs change detection and updates bindings for the my-app and calls ngOnInit on the MyAppComponent instance.
 * Then it proceeds to updating the bindings for the child-comp and calls ngOnInit on the ChildComponent class.
 *
 * https://indepth.dev/the-essential-difference-between-constructor-and-ngoninit-in-angular/
 * https://angular.io/guide/dependency-injection#when-the-service-needs-a-service
 */

@Component({
  selector: 'app-cdr-demo-two',
  templateUrl: './cdr-demo-two.component.html',
  styleUrls: ['./cdr-demo-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoTwoComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', changes);
  }

  // content addresses the transcluded children of the current component
  // (that you can transclude using the <ng-content></ng-content> element).
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // view addresses the template of the component
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
