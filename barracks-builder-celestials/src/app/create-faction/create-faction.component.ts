import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-faction',
  templateUrl: './create-faction.component.html',
  styleUrls: ['./create-faction.component.css']
})
export class CreateFactionComponent implements OnInit {
  worldId: number;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.worldId = params.worldId;
      });
  }

}
