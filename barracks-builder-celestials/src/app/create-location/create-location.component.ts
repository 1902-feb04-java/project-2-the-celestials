import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  worldId: string;
  notifier: string;
  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.worldId = params.worldId;
      });
  }

  createLocation(form: NgForm) {
    let name: string = form.controls['name'].value;
    let description: string = form.controls['descriptor'].value;
    this.httpService.createLocation(name, description, this.worldId);
    this.notifier = "Thank you for creating a location for your world!";
  }

}
