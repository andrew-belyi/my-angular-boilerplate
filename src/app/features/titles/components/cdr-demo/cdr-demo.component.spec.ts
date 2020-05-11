import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoComponent } from './cdr-demo.component';

describe('CdrDemoComponent', () => {
  let component: CdrDemoComponent;
  let fixture: ComponentFixture<CdrDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdrDemoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
