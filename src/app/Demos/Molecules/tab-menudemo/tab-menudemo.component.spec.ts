import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenudemoComponent } from './tab-menudemo.component';

describe('TabMenudemoComponent', () => {
  let component: TabMenudemoComponent;
  let fixture: ComponentFixture<TabMenudemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMenudemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMenudemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
