import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeaponComponent } from './user-weapon.component';

describe('UserWeaponComponent', () => {
  let component: UserWeaponComponent;
  let fixture: ComponentFixture<UserWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
