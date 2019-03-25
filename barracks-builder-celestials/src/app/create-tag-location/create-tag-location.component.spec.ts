import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagLocationComponent } from './create-tag-location.component';

describe('CreateTagLocationComponent', () => {
  let component: CreateTagLocationComponent;
  let fixture: ComponentFixture<CreateTagLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTagLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
