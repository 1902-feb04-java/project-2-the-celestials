import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { WeaponComponent } from './weapon/weapon.component';


const routes: Routes = [
  { path: 'world', component: WorldComponent},
  { path: 'weapon', component: WeaponComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

