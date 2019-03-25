import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefenseComponent } from './user-defense.component';

describe('UserDefenseComponent', () => {
  let component: UserDefenseComponent;
  let fixture: ComponentFixture<UserDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
