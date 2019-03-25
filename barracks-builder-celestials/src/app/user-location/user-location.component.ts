import { Component, OnInit } from '@angular/core';
import { Location } from 'src/location';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {
  id: number;
  userId: number;
  weaponUserId: number;
  location: Location;
  private sub: any;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id of this weapon
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // get user id as parameter
    this.route.queryParams
      .subscribe(params => {
        this.weaponUserId = params.userId;
      });
    this.getLocation();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getLocation(): void {
    this.userId = parseInt(localStorage.getItem("user_id"));
    this.httpService.getLocationById(this.id)
      .subscribe(location => this.location = location);
  }

  newTag(): void {
    let url = 'createtagforlocation';
    url = url + "?locationId=" + this.id;
    window.location.href = url;
  }
}
