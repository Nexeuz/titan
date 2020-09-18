import {AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {car} from '../../core/mock/car';
import {GetCarsService} from '../../core/state/get-cars/get-cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core/state/get-cars/get-car.model';
import {UserService} from '../../core/state/user/user.service';

@Component({
  selector: 'titan-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit, OnDestroy, AfterViewInit {

  data$: Observable<Car[]>;
  loading$: Observable<boolean> = this.carsService.loading$;


  constructor(private router: Router,
              private carsService: GetCarsService,
              private userService: UserService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {

    this.data$ = this.carsService.getCars();

  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(it => {
      this.userService.userStore.update(state => (
        {...state, ui: {isHeaderWhite: true}}
      ));
    });
  }

  ngOnDestroy(): void {
    this.ngZone.runOutsideAngular(it => {
      this.userService.userStore.update(state => (
        {...state, ui: {isHeaderWhite: false}}
      ));
    });

  }

}
