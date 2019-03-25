import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagWeaponComponent } from './create-tag-weapon.component';

describe('CreateTagWeaponComponent', () => {
  let component: CreateTagWeaponComponent;
  let fixture: ComponentFixture<CreateTagWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTagWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
