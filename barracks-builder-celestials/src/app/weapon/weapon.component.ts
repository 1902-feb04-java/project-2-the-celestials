import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { Weapon} from '../../weapon';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  @Input() weapons : Weapon[];
  columnsToDisplay = ['name','range','description'];
 


  constructor(private httpService: HttpService) { }

  ngOnInit() {
    
    this.getWeapon();
  }

  getWeapon(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // const id = 1;
    this.httpService.getWeapons()
     .subscribe(weapons => this.weapons = weapons);
  }

  goToWeapon(name: string): void {
    let weaponId;
    this.weapons.forEach(element => {
      if (element.name === name) {
        weaponId = element.id;
      }
    });
    window.location.href = "/weapon/" + weaponId;
  }

}
