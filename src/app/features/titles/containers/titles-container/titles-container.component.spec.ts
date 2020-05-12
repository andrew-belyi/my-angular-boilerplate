import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesContainerComponent } from './titles-container.component';

describe('TitlesContainerComponent', () => {
  let component: TitlesContainerComponent;
  let fixture: ComponentFixture<TitlesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitlesContainerComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
