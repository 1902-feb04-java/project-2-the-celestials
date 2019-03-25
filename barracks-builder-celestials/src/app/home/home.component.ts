import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: number;

  constructor() { }

  ngOnInit() {
    this.userId = parseInt(localStorage.getItem("user_id"));
  }

}
