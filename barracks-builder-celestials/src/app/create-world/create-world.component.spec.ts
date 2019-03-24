import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorldComponent } from './create-world.component';

describe('CreateWorldComponent', () => {
  let component: CreateWorldComponent;
  let fixture: ComponentFixture<CreateWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
