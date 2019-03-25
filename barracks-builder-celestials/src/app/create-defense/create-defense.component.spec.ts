import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDefenseComponent } from './create-defense.component';

describe('CreateDefenseComponent', () => {
  let component: CreateDefenseComponent;
  let fixture: ComponentFixture<CreateDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
