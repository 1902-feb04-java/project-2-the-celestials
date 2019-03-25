import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/weapon';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-weapon',
  templateUrl: './user-weapon.component.html',
  styleUrls: ['./user-weapon.component.css']
})
export class UserWeaponComponent implements OnInit {
  id: number;
  userId: number;
  weaponUserId: number;
  weapon: Weapon;
  private sub: any;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id of this weapon
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // get user id as parameter
    this.route.queryParams
      .subscribe(params => {
        this.weaponUserId = params.userId;
      });
    this.getWeapon();
  }

  getWeapon(): void {
    this.userId = parseInt(localStorage.getItem("user_id"));
    this.httpService.getWeaponById(this.id)
      .subscribe(weapon => this.weapon = weapon);
  }

  newTag(): void {
    alert("add tag here");
  }
}
