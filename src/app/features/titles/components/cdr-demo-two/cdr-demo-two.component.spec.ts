import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoTwoComponent } from './cdr-demo-two.component';

describe('CdrDemoTwoComponent', () => {
  let component: CdrDemoTwoComponent;
  let fixture: ComponentFixture<CdrDemoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdrDemoTwoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
