import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-tag-faction',
  templateUrl: './create-tag-faction.component.html',
  styleUrls: ['./create-tag-faction.component.css']
})
export class CreateTagFactionComponent implements OnInit {
  factionId: string;
  notifier: string;

  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.factionId = params.factionId;
    });
  }

  createTag(form: NgForm) {
    let name = form.controls['name'].value;
    this.httpService.createTagForFaction(name, this.factionId);
    this.notifier = "Thank you for creating a tag for this faction!"
  }

}
