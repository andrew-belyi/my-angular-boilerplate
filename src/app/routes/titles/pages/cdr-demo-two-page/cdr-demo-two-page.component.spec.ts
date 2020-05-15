import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoTwoPageComponent } from './cdr-demo-two-page.component';

describe('CdrDemoTwoPageComponent', () => {
  let component: CdrDemoTwoPageComponent;
  let fixture: ComponentFixture<CdrDemoTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdrDemoTwoPageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
