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
import { WeaponComponent } from './weapon/weapon.component';
import { DefenseComponent } from './defense/defense.component';
import { FactionComponent } from './faction/faction.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    LoginComponent,
    HomeComponent,
    WeaponComponent,
    DefenseComponent,
    FactionComponent

  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
