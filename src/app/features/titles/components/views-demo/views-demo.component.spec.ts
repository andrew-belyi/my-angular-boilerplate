import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDemoComponent } from './views-demo.component';

describe('ViewsDemoComponent', () => {
  let component: ViewsDemoComponent;
  let fixture: ComponentFixture<ViewsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsDemoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
