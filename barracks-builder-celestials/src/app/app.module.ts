import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UiModule } from './ui/ui.module';
import { WorldsTableComponent } from './worlds-table/worlds-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { WeaponComponent } from './weapon/weapon.component';
import { DefenseComponent } from './defense/defense.component';
import { FactionComponent } from './faction/faction.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateWorldComponent } from './create-world/create-world.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { CreateFactionComponent } from './create-faction/create-faction.component';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { UserFactionComponent } from './user-faction/user-faction.component';
import { CreateTagFactionComponent } from './create-tag-faction/create-tag-faction.component';
import { CreateWeaponComponent } from './create-weapon/create-weapon.component';
import { CreateDefenseComponent } from './create-defense/create-defense.component';
import { UserWeaponComponent } from './user-weapon/user-weapon.component';
import { UserDefenseComponent } from './user-defense/user-defense.component';
import { CreateTagWeaponComponent } from './create-tag-weapon/create-tag-weapon.component';
import { CreateTagDefenseComponent } from './create-tag-defense/create-tag-defense.component';
import { CreateTagLocationComponent } from './create-tag-location/create-tag-location.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    LoginComponent,
    HomeComponent,
    WorldsTableComponent,
    WeaponComponent,
    DefenseComponent,
    FactionComponent,
    LocationComponent,
    ProfileComponent,
    CreateWorldComponent,
    CreateLocationComponent,
    CreateFactionComponent,
    CreateTagComponent,
    UserFactionComponent,
    CreateTagFactionComponent,
    CreateWeaponComponent,
    CreateDefenseComponent,
    UserWeaponComponent,
    UserDefenseComponent,
    CreateTagWeaponComponent,
    CreateTagDefenseComponent,
    CreateTagLocationComponent

  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
