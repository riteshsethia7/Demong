import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddemoComponent } from './carddemo.component';

describe('CarddemoComponent', () => {
  let component: CarddemoComponent;
  let fixture: ComponentFixture<CarddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
