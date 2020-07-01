import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbDemoComponent } from './breadcrumb-demo.component';

describe('BreadcrumbDemoComponent', () => {
  let component: BreadcrumbDemoComponent;
  let fixture: ComponentFixture<BreadcrumbDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
