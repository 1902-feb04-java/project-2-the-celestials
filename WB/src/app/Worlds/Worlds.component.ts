import { Component, OnInit } from '@angular/core';

import { World } from '../World';
import { WorldService } from '../world.service';

@Component({
  selector: 'app-Worlds',
  templateUrl: './Worlds.component.html',
  styleUrls: ['./Worlds.component.css']
})
export class WorldsComponent implements OnInit {

  selectedWorld: World;

  Worlds: World[];

  constructor(private worldService: WorldService) { }

  ngOnInit() {
    this.getWorlds();
  }

  onSelect(world: World): void {
    this.selectedWorld = world;
  }

  getWorlds(): void {
    this.worldService.getWorlds()
        .subscribe(Worlds => this.Worlds = Worlds);
  }
}
