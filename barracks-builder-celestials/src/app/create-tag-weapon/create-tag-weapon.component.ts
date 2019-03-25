import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-tag-weapon',
  templateUrl: './create-tag-weapon.component.html',
  styleUrls: ['./create-tag-weapon.component.css']
})
export class CreateTagWeaponComponent implements OnInit {
  weaponId: string;
  notifier: string;

  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.weaponId = params.weaponId;
    });
  }

  createTag(form: NgForm) {
    let name = form.controls['name'].value;
    this.httpService.createTagForWeapon(name, this.weaponId);
    this.notifier = "Thank you for creating a tag for this weapon!"
  }

}
