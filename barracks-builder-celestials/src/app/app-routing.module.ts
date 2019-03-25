import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { LoginComponent } from './login/login.component';
import { WorldsTableComponent } from './worlds-table/worlds-table.component';
import { WeaponComponent } from './weapon/weapon.component';
import { DefenseComponent } from './defense/defense.component';
import { FactionComponent } from './faction/faction.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CreateWorldComponent } from './create-world/create-world.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { CreateFactionComponent } from './create-faction/create-faction.component';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { UserFactionComponent } from './user-faction/user-faction.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { CreateTagFactionComponent } from './create-tag-faction/create-tag-faction.component';
import { CreateWeaponComponent } from './create-weapon/create-weapon.component';
import { CreateDefenseComponent } from './create-defense/create-defense.component';
import { UserWeaponComponent } from './user-weapon/user-weapon.component';
import { UserDefenseComponent } from './user-defense/user-defense.component';
import { CreateTagWeaponComponent } from './create-tag-weapon/create-tag-weapon.component';
import { CreateTagDefenseComponent } from './create-tag-defense/create-tag-defense.component';
import { CreateTagLocationComponent } from './create-tag-location/create-tag-location.component';





const routes: Routes = [
  { path: 'world/:id', component: WorldComponent},
  { path: 'faction/:id', component: UserFactionComponent},
  { path: 'weapon/:id', component: UserWeaponComponent},
  { path: 'defense/:id', component: UserDefenseComponent},
  { path: 'location/:id', component: UserLocationComponent},
  
  { path: 'weapon', component: WeaponComponent},
  { path: 'defense', component: DefenseComponent},
  { path: 'faction', component: FactionComponent},
  { path: 'location', component: LocationComponent},
  { path: 'worldtable', component: WorldsTableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'home', component: HomeComponent},
  
  { path: 'createworld', component: CreateWorldComponent},
  { path: 'createlocation', component: CreateLocationComponent},
  { path: 'createfaction', component: CreateFactionComponent},
  { path: 'createweapon', component: CreateWeaponComponent},
  { path: 'createdefense', component: CreateDefenseComponent},
  { path: 'createtag', component: CreateTagComponent},
  { path: 'createtagforfaction', component: CreateTagFactionComponent},
  { path: 'createtagforweapon', component: CreateTagWeaponComponent},
  { path: 'createtagfordefense', component: CreateTagDefenseComponent},
  { path: 'createtagforlocation', component: CreateTagLocationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

