import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { WeaponComponent } from './weapon/weapon.component';
import { DefenseComponent } from './defense/defense.component';
import { FactionComponent } from './faction/faction.component';
import { LocationComponent } from './location/location.component';




const routes: Routes = [
  { path: 'world', component: WorldComponent},
  { path: 'weapon', component: WeaponComponent},
  { path: 'defense', component: DefenseComponent},
  { path: 'faction', component: FactionComponent},
  { path: 'location', component: LocationComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

