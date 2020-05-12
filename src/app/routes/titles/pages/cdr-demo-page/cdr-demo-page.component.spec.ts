import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoPageComponent } from './cdr-demo-page.component';

describe('CdrDemoPageComponent', () => {
  let component: CdrDemoPageComponent;
  let fixture: ComponentFixture<CdrDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdrDemoPageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
