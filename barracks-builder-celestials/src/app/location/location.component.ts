import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Location} from '../../location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
@Input() locations: Location[];
columnsToDisplay = ['name', 'description','world'];


  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void{
    this.httpService.getLocations().subscribe(locations => this.locations = locations);
  }

}
