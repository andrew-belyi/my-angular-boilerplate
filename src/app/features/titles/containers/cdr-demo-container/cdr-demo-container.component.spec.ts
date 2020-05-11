import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoContainerComponent } from './cdr-demo-container.component';

describe('CdrDemoContainerComponent', () => {
  let component: CdrDemoContainerComponent;
  let fixture: ComponentFixture<CdrDemoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdrDemoContainerComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
