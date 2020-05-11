import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDemoContainerComponent } from './views-demo-container.component';

describe('ViewsDemoContainerComponent', () => {
  let component: ViewsDemoContainerComponent;
  let fixture: ComponentFixture<ViewsDemoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsDemoContainerComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsDemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
