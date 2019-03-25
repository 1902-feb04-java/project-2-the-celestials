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

  constructor(private httpService : HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getFaction();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getFaction(): void {
    this.userId = parseInt(localStorage.getItem("user_id"));
    this.httpService.getFactionById(this.id)
     .subscribe(faction => this.faction = faction);
  }

  newTag() {
    let url = '/createtagforfaction';
    url = url + "?factionId=" + this.id; 
    window.location.href = url;
  }

  newWeapon() {
    let url = '/createweapon';
    url = url + "?factionId=" + this.id;
    window.location.href = url;
  }

  newDefense() {
    let url = '/createdefense';
    url = url + "?factionId=" + this.id;
    window.location.href = url;
  }
}
