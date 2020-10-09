import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/state/user/user.service';
import {GetCarsService} from '../../../../core/state/get-cars/get-cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../../../core/state/get-cars/get-car.model';
import {map, share, tap} from 'rxjs/operators';

@Component({
  selector: 'titan-car-detail-insurance',
  templateUrl: './car-detail-insurance.component.html',
  styleUrls: ['./car-detail-insurance.component.scss']
})
export class CarDetailInsuranceComponent implements OnInit {

  insurance$: Observable<any>;
  userService$: Observable<any>;

  constructor(private userService: UserService,
              private getCarsService: GetCarsService) {
  }

  ngOnInit(): void {
    this.initObs();
  }

  initObs(): void {

    this.userService$ = this.userService.userQuery.select(it => it.ui)
      .pipe(
        tap(console.log),
        share()
      );
    this.insurance$ = (this.getCarsService.getCarsQuery.selectActive() as Observable<Car>)
      .pipe(
        map(it => (
          [{
            insurb: it.insurb,
            description: 'Excess 500,00 KRW + loss of business charges. Coverage Does not include rims and tires, side mirrors, keys and road-side assistance.'
          },
            {
              insurf: it.insurf,
              description: 'Excess 0 KRW. Coverage Does not include rims and tires, side mirrors, keys and road-side assistance.'
            }]
        ))
      );
  }


  change(object): void {
    const arrKeys = Object.keys(object);
    this.userService.userStore.update(state => ({
        ...state,
        ui: {
          ...state.ui,
          insuranceSelected: arrKeys[0]
        }
      })
    );

  }
}
