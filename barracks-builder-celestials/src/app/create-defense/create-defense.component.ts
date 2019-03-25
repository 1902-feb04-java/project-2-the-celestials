import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-defense',
  templateUrl: './create-defense.component.html',
  styleUrls: ['./create-defense.component.css']
})
export class CreateDefenseComponent implements OnInit {
  @Input() bodySlots: any;
  factionId: string;
  notifier: string;

  constructor(private httpService: HttpService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.factionId = params.factionId;
    });
    this.getBodySlots();
  }

  getBodySlots() {
    this.httpService.getBodySlots().subscribe(bodySlots => this.bodySlots = bodySlots);
  }

  createDefense(form: NgForm) {
    let name = form.controls['name'].value;
    let description = form.controls['descriptor'].value;
    let bodySlotId = form.controls['bodyslot_id'].value;
    this.httpService.createDefense(name, description, bodySlotId, this.factionId);
    this.notifier = "Thank you for creating a defense for your faction!";
  }

}
