import { Component, OnInit } from '@angular/core';
import { AddStationServiceService } from '../add-station-service.service';

@Component({
  selector: 'add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  constructor(public addStationService: AddStationServiceService) { }

  ngOnInit() {
  }


}
