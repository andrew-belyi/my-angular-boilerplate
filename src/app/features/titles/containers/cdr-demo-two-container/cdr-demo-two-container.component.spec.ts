import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoTwoContainerComponent } from './cdr-demo-two-container.component';

describe('CdrDemoTwoContainerComponent', () => {
  let component: CdrDemoTwoContainerComponent;
  let fixture: ComponentFixture<CdrDemoTwoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdrDemoTwoContainerComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoTwoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
