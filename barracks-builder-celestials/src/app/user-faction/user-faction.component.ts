import { Component, OnInit } from '@angular/core';
import { Faction } from '../../faction';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-faction',
  templateUrl: './user-faction.component.html',
  styleUrls: ['./user-faction.component.css']
})
export class UserFactionComponent implements OnInit {
  id: number;
  userId: number;
  faction: Faction;
  private sub: any;

  columnsToDisplayWeapons = ['name', 'description','range'];
  columnsToDisplayDefenses = ['name', 'description','slot'];

  constructor(private httpService : HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getFaction();
  }

  getFaction(): void {
    this.userId = parseInt(localStorage.getItem("user_id"));
    this.httpService.getFactionById(this.id)
     .subscribe(faction => this.faction = faction);
  }

  goToWeapon(name: string): void {
    let weaponId;
    this.faction.weapons.forEach(element => {
      if (element.name === name) {
        weaponId = element.id;
      }
    });
    window.location.href = "/weapon/" + weaponId + "?userId="+this.faction.world.user.id;
  }

  goToDefense(name: string): void {
    let defenseId;
    this.faction.defenses.forEach(element => {
      if (element.name === name) {
        defenseId = element.id;
      }
    });
    window.location.href = "/defense/" + defenseId + "?userId="+this.faction.world.user.id;
  }
}
