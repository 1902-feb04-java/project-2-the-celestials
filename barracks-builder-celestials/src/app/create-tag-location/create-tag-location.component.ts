import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-tag-location',
  templateUrl: './create-tag-location.component.html',
  styleUrls: ['./create-tag-location.component.css']
})
export class CreateTagLocationComponent implements OnInit {
  locationId: string;
  notifier: string;

  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    /*this.route.queryParams
    .subscribe(params => {
      this.locationId = params.locationId;
    });*/
    this.locationId = "1";
  }

  createTag(form: NgForm) {
    let name = form.controls['name'].value;
    this.httpService.createTagForLocation(name, this.locationId);
    this.notifier = "Thank you for creating a tag for this location!"
  }

}
