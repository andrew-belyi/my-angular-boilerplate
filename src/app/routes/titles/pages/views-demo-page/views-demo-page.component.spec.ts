import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDemoPageComponent } from './views-demo-page.component';

describe('ViewsDemoPageComponent', () => {
  let component: ViewsDemoPageComponent;
  let fixture: ComponentFixture<ViewsDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsDemoPageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
