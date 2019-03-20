import { Component, OnInit, Input } from '@angular/core';

import { World } from '../../world';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  @Input() world: World;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getWorld();
  }

  getWorld(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = 1;
    this.httpService.getWorldById(id)
     .subscribe(world => this.world = world);
  }

  /**
   * World
   */
  public World() {
    window.location.href = "world"
  }

}
