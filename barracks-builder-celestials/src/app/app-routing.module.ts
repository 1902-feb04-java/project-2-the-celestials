import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { LoginComponent } from './login/login.component';
import { WorldsTableComponent } from './worlds-table/worlds-table.component';

const routes: Routes = [
  { path: 'world', component: WorldComponent},
  { path: 'worldtable', component: WorldsTableComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

