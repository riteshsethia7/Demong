import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfieldDemoComponent } from './inputfield-demo.component';

describe('InputfieldDemoComponent', () => {
  let component: InputfieldDemoComponent;
  let fixture: ComponentFixture<InputfieldDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputfieldDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputfieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
