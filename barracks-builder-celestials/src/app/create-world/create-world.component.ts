import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-world',
  templateUrl: './create-world.component.html',
  styleUrls: ['./create-world.component.css']
})
export class CreateWorldComponent implements OnInit {
  
  notifier: string;
 

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  createWorld(form: NgForm) {
    let name: string = form.controls['name'].value;
    let description: string = form.controls['descriptor'].value;
    let userId: string = localStorage.getItem("user_id");
    this.httpService.createWorld(name, description, userId);
    this.notifier = "Thank you for creating a world!";
  }
}
