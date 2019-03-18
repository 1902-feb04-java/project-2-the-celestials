import { Component, OnInit, Input } from '@angular/core';
import { World } from '../world';

@Component({
  selector: 'app-world-detail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})

export class WorldDetailComponent implements OnInit {
  @Input() world: World;
  constructor() { }

  ngOnInit() {
  }

}
