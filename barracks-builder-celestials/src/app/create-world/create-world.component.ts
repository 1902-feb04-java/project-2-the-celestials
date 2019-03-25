import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { World } from 'src/world';

@Component({
  selector: 'app-create-world',
  templateUrl: './create-world.component.html',
  styleUrls: ['./create-world.component.css']
})
export class CreateWorldComponent implements OnInit {
  world: World;
  notifier: string;


  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  createWorld(form: NgForm) {
    let name: string = form.controls['name'].value;
    let description: string = form.controls['descriptor'].value;
    let userId: string = localStorage.getItem("user_id");
    this.httpService.createWorld(name, description, userId)
      .subscribe(world => this.world = world);
    this.notifier = "Thank you for creating a world!";

    //window.location.href = "/world/" + this.world.id;
  }
}
