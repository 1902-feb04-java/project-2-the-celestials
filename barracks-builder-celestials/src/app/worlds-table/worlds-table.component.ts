import { Component, OnInit, Input } from '@angular/core';
import { World } from '../../world';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-worlds-table',
  templateUrl: './worlds-table.component.html',
  styleUrls: ['./worlds-table.component.css']
})
export class WorldsTableComponent implements OnInit {
  columnsToDisplay = ['name', 'description'];
  worlds: World[];
  @Input() userId: number;
  currentUser : number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getWorlds();
    this.currentUser = parseInt(localStorage.getItem('user_id'));
  }

  getWorlds(): void {
    if (this.userId > 0) {
      this.httpService.getUserWorlds(this.userId)
        .subscribe(worlds => this.worlds = worlds);
    }
    else {
      this.httpService.getWorlds()
        .subscribe(worlds => this.worlds = worlds);
    }
  }

  goToWorld(name : string): void {
    let worldId;
    this.worlds.forEach(element => {
      if (element.name === name){
        worldId=element.id;
      }
    });
    //alert('it works!'+worldId);
    window.location.href= "/world/"+worldId;
  }

  newWorld(): void {
    alert('it works!'); // test
    //window.location.href= "/";
  }
}
