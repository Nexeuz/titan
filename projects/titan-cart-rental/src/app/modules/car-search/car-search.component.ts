import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {car} from '../../core/mock/car';
import {GetCarsService} from '../../core/state/get-cars/get-cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core/state/get-cars/get-car.model';

@Component({
  selector: 'titan-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {

    data$: Observable<Car[]>;
    loading$: Observable<boolean> = this.carsService.loading$;

  constructor(private router: Router,
              private carsService: GetCarsService) {
  }

  ngOnInit(): void {
    this.data$ = this.carsService.getCars();
  }

}
