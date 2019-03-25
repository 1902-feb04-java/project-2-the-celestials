import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsTableComponent } from './worlds-table.component';

describe('WorldsTableComponent', () => {
  let component: WorldsTableComponent;
  let fixture: ComponentFixture<WorldsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
