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
 * 2. Unidirectional data flow
 *
 * Every Angular application has two phases:
 * 1. Updating the application state (components state) and it happens as a result of some callback invocation (ex. click on a button)
 * 2. Rendering
 *
 * We as developers are responsible for correct updating of application state, Angular as a framework is responsible for rendering.
 * And Angular does it using the mechanism of change detection.
 * There is one important limitation of change detection mechanism: as soon as Angular checked one View and moves to child components,
 * we can no longer update the properties of component that are used in bindings, because during the synchronous check, Angular will
 * re-evaluate the expressions and detect the difference (see 1. Change detection mechanism). However we can still update other
 * properties that are not used in bindings.
 *
 * Order of change detection, according to function checkAndUpdateView(view): (see below)
 *
 * 1. Update input bindings on child Views/Components and directives (@Input decorator)
 * 1.2. Call NgOnInit, NgDoCheck and NgOnChanges hooks if needed for child component
 * Services.updateDirectives(view, 0); 0 - CheckAndUpdate
 *
 * 2. DOM updates, perform rendering for the current View
 * Services.updateRenderer(view, 0); 0 - CheckAndUpdate
 *
 * 3. Run change detection for child component
 * execComponentViewsAction(view, ViewAction.CheckAndUpdate);
 *
 * 4. Call AfterViewChecked and AfterViewInit hooks for child component
 * callLifecycleHooksChildrenFirst(view, 8388608 | (callInit ? 4194304 : 0)); 8388608 - AfterViewChecked, 4194304 - AfterViewInit
 * ------------------------------------------------------------------------------------------------------------------------------
 * So according to that order, we can see that NgOnInit, NgDoCheck and NgOnChanges hooks are called before current view rendering, but
 * AfterViewChecked and AfterViewInit hooks are called after current view rendering.
 *
 */

  // function checkAndUpdateView(view) {
  //   if (view.state & 1 /* BeforeFirstCheck */) {
  //     view.state &= ~1 /* BeforeFirstCheck */;
  //     view.state |= 2 /* FirstCheck */;
  //   }
  //   else {
  //     view.state &= ~2 /* FirstCheck */;
  //   }
  //   shiftInitState(view, 0 /* InitState_BeforeInit */, 256 /* InitState_CallingOnInit */);
  //   markProjectedViewsForCheck(view);
  //   Services.updateDirectives(view, 0 /* CheckAndUpdate */);
  //   execEmbeddedViewsAction(view, ViewAction.CheckAndUpdate);
  //   execQueriesAction(view, 67108864 /* TypeContentQuery */, 536870912 /* DynamicQuery */, 0 /* CheckAndUpdate */);
  //   var callInit = shiftInitState(view, 256 /* InitState_CallingOnInit */, 512 /* InitState_CallingAfterContentInit */);
  //   callLifecycleHooksChildrenFirst(view, 2097152 /* AfterContentChecked */ | (callInit ? 1048576 /* AfterContentInit */ : 0));
  //   Services.updateRenderer(view, 0 /* CheckAndUpdate */);
  //   execComponentViewsAction(view, ViewAction.CheckAndUpdate);
  //   execQueriesAction(view, 134217728 /* TypeViewQuery */, 536870912 /* DynamicQuery */, 0 /* CheckAndUpdate */);
  //   callInit = shiftInitState(view, 512 /* InitState_CallingAfterContentInit */, 768 /* InitState_CallingAfterViewInit */);
  //   callLifecycleHooksChildrenFirst(view, 8388608 /* AfterViewChecked */ | (callInit ? 4194304 /* AfterViewInit */ : 0));
  //   if (view.def.flags & 2 /* OnPush */) {
  //     view.state &= ~8 /* ChecksEnabled */;
  //   }
  //   view.state &= ~(64 /* CheckProjectedViews */ | 32 /* CheckProjectedView */);
  //   shiftInitState(view, 768 /* InitState_CallingAfterViewInit */, 1024 /* InitState_AfterInit */);
  // }

  // see video https://www.youtube.com/watch?v=DsBy9O0c6eo
  // https://indepth.dev/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error/
  // https://medium.com/angular-in-depth/these-5-articles-will-make-you-an-angular-change-detection-expert-ed530d28930
  // https://indepth.dev/level-up-your-reverse-engineering-skills/

@Component({
  selector: 'app-cdr-demo-two',
  templateUrl: './cdr-demo-two.component.html',
  styleUrls: ['./cdr-demo-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoTwoComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  text = 'original';

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
