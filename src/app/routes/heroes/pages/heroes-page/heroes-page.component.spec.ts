import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPageComponent } from './heroes-page.component';

describe('HeroesPageComponent', () => {
  let component: HeroesPageComponent;
  let fixture: ComponentFixture<HeroesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesPageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
