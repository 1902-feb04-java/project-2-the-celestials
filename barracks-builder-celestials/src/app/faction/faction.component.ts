import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Faction} from '../../faction';

@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css']
})
export class FactionComponent implements OnInit {
@Input() factions: Faction[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getFaction();
  }

  getFaction(): void{
    this.httpService.getFactions()
    .subscribe(factions => this.factions = factions);
  }

}
