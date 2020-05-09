import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesPageComponent } from './titles-page.component';

describe('TitlesPageComponent', () => {
  let component: TitlesPageComponent;
  let fixture: ComponentFixture<TitlesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitlesPageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
