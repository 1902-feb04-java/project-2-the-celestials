import { Component, OnInit } from '@angular/core';
import { WorldComponent } from '../world/world.component';
import { HttpService } from '../http.service';
import { User } from '../../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId : number;
  user : User;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.userId = parseInt(localStorage.getItem('user_id'));
    this.httpService.getUserById(this.userId)
     .subscribe(user => this.user = user);
  }

}
