import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Weapon} from '../../weapon';


@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  @Input() weapons : Weapon[];
  columnsToDisplay = ['name','description','range'];
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

}
