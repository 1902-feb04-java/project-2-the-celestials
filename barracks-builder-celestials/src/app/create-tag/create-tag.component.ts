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
  worldId: string;
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
    this.httpService.createTagForWorld(name, this.worldId);
    this.notifier = "Thank you for creating a tag for your world!";
    let description: string = form.controls['descriptor'].value;
    let userId: string = localStorage.getItem("user_id");
    this.httpService.createWorld(name, description, userId);
  }
}
