import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesDemoComponent } from './molecules-demo.component';

describe('MoleculesDemoComponent', () => {
  let component: MoleculesDemoComponent;
  let fixture: ComponentFixture<MoleculesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleculesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
