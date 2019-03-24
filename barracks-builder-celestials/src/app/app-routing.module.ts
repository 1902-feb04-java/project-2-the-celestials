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





const routes: Routes = [
  { path: 'world/:id', component: WorldComponent},
  { path: 'weapon', component: WeaponComponent},
  { path: 'defense', component: DefenseComponent},
  { path: 'faction', component: FactionComponent},
  { path: 'location', component: LocationComponent},
  { path: 'worldtable', component: WorldsTableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'home', component: HomeComponent},
  { path: 'createworld', component: CreateWorldComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

