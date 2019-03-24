import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFactionComponent } from './user-faction.component';

describe('UserFactionComponent', () => {
  let component: UserFactionComponent;
  let fixture: ComponentFixture<UserFactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
