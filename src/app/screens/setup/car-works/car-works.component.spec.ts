import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWorksComponent } from './car-works.component';

describe('CarWorksComponent', () => {
  let component: CarWorksComponent;
  let fixture: ComponentFixture<CarWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
