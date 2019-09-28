import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddStationServiceService {

  constructor() { }

  form = new FormGroup({
    stationName: new FormControl(''),
    stationLocation:new FormControl(''),
    stationHasFuel: new FormControl(false)
  });
}
