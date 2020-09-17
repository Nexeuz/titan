import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {car} from '../../core/mock/car';
import {GetCarsStore} from '../../core/state/get-cars/get-cars.store';
import {GetCarsService} from '../../core/state/get-cars/get-cars.service';

@Component({
  selector: 'titan-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {

    data = car();

  constructor(private router: Router,
              private carsService: GetCarsService) {
  }

  ngOnInit(): void {
    this.carsService.getCars()
      .subscribe();
  }

}
