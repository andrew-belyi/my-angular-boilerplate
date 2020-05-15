import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneContainerComponent } from './zone-container.component';

describe('ZoneContainerComponent', () => {
  let component: ZoneContainerComponent;
  let fixture: ComponentFixture<ZoneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneContainerComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
