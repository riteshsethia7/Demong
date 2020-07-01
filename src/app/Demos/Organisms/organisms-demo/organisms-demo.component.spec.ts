import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsDemoComponent } from './organisms-demo.component';

describe('OrganismsDemoComponent', () => {
  let component: OrganismsDemoComponent;
  let fixture: ComponentFixture<OrganismsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
