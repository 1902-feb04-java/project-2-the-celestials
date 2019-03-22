import { Component, OnInit, Input } from '@angular/core';

import { World } from '../../world';
import { Faction } from '../../faction';
import { Location } from '../../location';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  @Input() world: World;
  @Input() factions: Faction[];
  @Input() locations: Location[];
  columnsToDisplay = ['name', 'description'];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getWorld();
  }

  getWorld(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = parseInt(localStorage.getItem("user_id"));
    this.httpService.getWorldById(id)
     .subscribe(world => this.world = world);
    this.httpService.getWorldFactionsById(id)
      .subscribe(factions => this.factions = factions);
    this.httpService.getWorldLocationsById(id)
      .subscribe(locations => this.locations = locations);
  }

  /**
   * World
   */
  /*public World() {
    window.location.href = "world"
  }*/

}
