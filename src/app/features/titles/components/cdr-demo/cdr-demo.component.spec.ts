import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CdrDemoComponent } from './cdr-demo.component';

import { FullNamePurePipe } from '@ui/pipes/pipes/full-name-pure.pipe';
import { FullNameImpurePipe } from '@ui/pipes/pipes/full-name-impure.pipe';

describe('CdrDemoComponent', () => {
  let component: CdrDemoComponent;
  let fixture: ComponentFixture<CdrDemoComponent>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [
        CdrDemoComponent,
        FullNamePurePipe,
        FullNameImpurePipe,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrDemoComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
