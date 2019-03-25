import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagFactionComponent } from './create-tag-faction.component';

describe('CreateTagFactionComponent', () => {
  let component: CreateTagFactionComponent;
  let fixture: ComponentFixture<CreateTagFactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTagFactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
