import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFactionComponent } from './create-faction.component';

describe('CreateFactionComponent', () => {
  let component: CreateFactionComponent;
  let fixture: ComponentFixture<CreateFactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
