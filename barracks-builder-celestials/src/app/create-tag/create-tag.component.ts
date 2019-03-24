import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {
  worldId: number;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.worldId = params.worldId;
      });
  }

}
