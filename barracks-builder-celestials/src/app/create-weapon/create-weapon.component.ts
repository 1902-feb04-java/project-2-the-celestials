import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.css']
})
export class CreateWeaponComponent implements OnInit {
  @Input() ranges: Range[];
  factionId: string;
  notifier: string;

  constructor(private httpService: HttpService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.factionId = params.factionId;
    });
    this.getRanges();
  }

  getRanges() {
    this.httpService.getRanges().subscribe(ranges => this.ranges = ranges);
  }

  createWeapon(form: NgForm) {
    let name = form.controls['name'].value;
    let description = form.controls['descriptor'].value;
    let rangeId = form.controls['range_id'].value;
    this.httpService.createWeapon(name, description, rangeId, this.factionId);
    this.notifier = "Thank you for creating a weapon for your faction!";
  }
}
