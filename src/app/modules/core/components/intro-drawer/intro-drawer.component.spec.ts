import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDrawerComponent } from './intro-drawer.component';

describe('IntroDrawerComponent', () => {
  let component: IntroDrawerComponent;
  let fixture: ComponentFixture<IntroDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
