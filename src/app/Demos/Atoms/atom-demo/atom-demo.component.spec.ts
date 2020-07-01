import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomDemoComponent } from './atom-demo.component';

describe('AtomDemoComponent', () => {
  let component: AtomDemoComponent;
  let fixture: ComponentFixture<AtomDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
