import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagDefenseComponent } from './create-tag-defense.component';

describe('CreateTagDefenseComponent', () => {
  let component: CreateTagDefenseComponent;
  let fixture: ComponentFixture<CreateTagDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTagDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
