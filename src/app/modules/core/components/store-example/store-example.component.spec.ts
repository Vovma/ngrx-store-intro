import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreExampleComponent } from './store-example.component';

describe('StoreExampleComponent', () => {
  let component: StoreExampleComponent;
  let fixture: ComponentFixture<StoreExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
