import { Component, OnInit } from '@angular/core';
import { World } from '../../world';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-worlds-table',
  templateUrl: './worlds-table.component.html',
  styleUrls: ['./worlds-table.component.css']
})
export class WorldsTableComponent implements OnInit {
  columnsToDisplay = ['name'];
  worlds : World[];
  SAMPLE_WORLDS: World[] = [
    {id: 1, name: 'World1', description: 'uiahsdia', tags:[1,2], user:1, locations:[1], factions:[1]},
  ];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getWorlds();
  }

  getWorlds() : void {
    this.httpService.getWorlds()
    .subscribe(worlds => this.worlds = worlds);
  }
}
