import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-faction',
  templateUrl: './create-faction.component.html',
  styleUrls: ['./create-faction.component.css']
})
export class CreateFactionComponent implements OnInit {
  notifier: string;
  worldId: string;
  constructor(private route : ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.worldId = params.worldId;
      });
  }

  createFaction(form: NgForm) {
    let name: string = form.controls['name'].value;
    let description: string = form.controls['descriptor'].value;
    let population: string = form.controls['population'].value;
    this.httpService.createFaction(name, description, population, this.worldId);
    this.notifier = "Thank you for creating a faction for your world";
  }

}
