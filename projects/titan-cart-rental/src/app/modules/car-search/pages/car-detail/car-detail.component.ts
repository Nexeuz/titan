import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../core/state/user/user.service';
import {GetCarsService} from '../../../../core/state/get-cars/get-cars.service';
import {Observable, pipe} from 'rxjs';
import {Car} from '../../../../core/state/get-cars/get-car.model';
import {share} from 'rxjs/operators';
import {getEntityType} from '@datorama/akita';
import {GetCarsState} from '../../../../core/state/get-cars/get-cars.store';

@Component({
  selector: 'titan-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  carInfo$: Observable<getEntityType<GetCarsState>[]> | Observable<getEntityType<GetCarsState>> = this.getCarsService.getCarsQuery.selectActive();
  constructor(private userService: UserService,
              private getCarsService: GetCarsService) { }

  ngOnInit(): void {
  }

}
