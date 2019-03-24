import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { World } from '../../world';
import { Faction } from '../../faction';
import { Location } from '../../location';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  @Input() world: World;
  @Input() factions: Faction[];
  @Input() locations: Location[];
  @Input() id: number;
  userId: number;
  private sub: any;

  columnsToDisplay = ['name','description','world'];
  columnsToDisplay1 = ['name','description','world','population'];
  columnsToDisplay2 = ['name','description'];

  constructor(private httpService: HttpService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.getWorld();
  }

  ngOnDestory() {
    this.sub.unsubscribe();
  }
  getWorld(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.userId = parseInt(localStorage.getItem("user_id"));
    this.httpService.getWorldById(this.id)
     .subscribe(world => this.world = world);
    this.httpService.getWorldFactionsById(this.id)
      .subscribe(factions => this.factions = factions);
    this.httpService.getWorldLocationsById(this.id)
      .subscribe(locations => this.locations = locations);
  }

  newTag() : void {
    let url = "/createtag";
    url = url + "?worldId="+this.id;
    window.location.href= url;
  }
  newLocation() : void {
    let url = "/createlocation";
    url = url + "?worldId="+this.id;
    window.location.href= url;
  }
  newFaction() : void {
    let url = "/createfaction";
    url = url + "?worldId="+this.id;
    window.location.href= url;
  }

  /**
   * World
   */
  /*public World() {
    window.location.href = "world"
  }*/

}
