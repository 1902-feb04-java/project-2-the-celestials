import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-tag-defense',
  templateUrl: './create-tag-defense.component.html',
  styleUrls: ['./create-tag-defense.component.css']
})
export class CreateTagDefenseComponent implements OnInit {
  defenseId: string;
  notifier: string;

  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.defenseId = params.defenseId;
    });
  }

  createTag(form: NgForm) {
    let name = form.controls['name'].value;
    this.httpService.createTagForDefense(name, this.defenseId);
    this.notifier = "Thank you for creating a tag for this defense!"
  }

}
