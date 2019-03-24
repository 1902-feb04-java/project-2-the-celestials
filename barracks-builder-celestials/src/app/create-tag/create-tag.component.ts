import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {
  worldId: number;
  notifier: string;

  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.worldId = params.worldId;
      });
  }

  createTag(form: NgForm) {
    let name: string = form.controls['name'].value;
    let description: string = form.controls['descriptor'].value;
    let userId: string = localStorage.getItem("user_id");
    this.httpService.createWorld(name, description, userId);
    this.notifier = "Thank you for creating a world!";
  }
}
