import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Defense} from '../../defense';
@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.css']
})
export class DefenseComponent implements OnInit {
@Input() defenses: Defense[];
columnsToDisplay = ['name','description','slot'];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getDefense();
  }

  getDefense(): void{
    this.httpService.getDefenses().subscribe(defenses => this.defenses = defenses);
  }

  goToDefense(name: string): void {
    let defenseId;
    this.defenses.forEach(element => {
      if (element.name === name) {
        defenseId = element.id;
      }
    });
    window.location.href = "/defense/" + defenseId;
  }
}
