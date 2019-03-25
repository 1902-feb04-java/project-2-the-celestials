import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Defense } from 'src/defense';

@Component({
  selector: 'app-user-defense',
  templateUrl: './user-defense.component.html',
  styleUrls: ['./user-defense.component.css']
})
export class UserDefenseComponent implements OnInit {
  id: number;
  userId: number;
  defenseUserId: number;
  defense: Defense;
  private sub: any;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // defense id from path
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // user id as parameter
    this.route.queryParams
      .subscribe(params => {
        this.defenseUserId = params.userId;
      });
    this.getDefense();
  }

  getDefense(): void {
    this.userId = parseInt(localStorage.getItem("user_id"));
    this.httpService.getDefenseById(this.id)
      .subscribe(defense => this.defense = defense);
  }

  newTag(): void {
    let url = "createtagfordefense";
    url = url + "?defenseId=" + this.id;
    window.location.href = url;
  }

}
