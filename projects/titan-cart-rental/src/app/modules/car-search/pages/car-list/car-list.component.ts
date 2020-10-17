import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../../../../core/state/cars/get-cars/get-car.model';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/state/user/user.service';
import {FilterBody, GetCarsService} from '../../../../core/state/cars/get-cars/get-cars.service';
import {switchMap, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {FiltersService} from '../../../../core/state/filters/filters.service';

@Component({
  selector: 'titan-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements  OnInit, OnDestroy, AfterViewInit {

  data$: Observable<Car[]>;
  loading$: Observable<boolean> = this.carsService.loading$;


  constructor(private router: Router,
              private userService: UserService,
              private carsService: GetCarsService,
              private filters: FiltersService) {
  }

  ngOnInit(): void {
    this.setDataStoreOrRouter();
    this.formatAndSendFilters();
  }

  formatAndSendFilters(): void {
   /** this.filters.filtersQuery.selectAll()
      .pipe(
        switchMap(it => {
          const filters: FilterBody[] = [
            {
              id: 0,
              values: it[0].priceRangeSelected
            },
            {
              id: 1,
             // values: it[1].values.filter(vl => vl.checked === true).map(mp => ({ id: mp.id, value: mp.value }))
            },
          ];
          return this.carsService.filterCars(filters);
        })
      ).subscribe(); **/
  }

  setDataStoreOrRouter(): void {

    this.userService.routerQuery.selectParams()
      .pipe(
        tap((param: any) => {
          if (param.select) {
            const twoPointsIndex = param.bkdt.indexOf(':');
            const start = param.bkdt.slice(0, twoPointsIndex);
            const end = param.bkdt.slice(twoPointsIndex + 1, param.bkdt.length);

            this.userService.userStore.update(state =>  ({
              ...state,
              ui: {
                ...state.ui,
                bkdt: {start, end},
                city: param.city,
                select: param.select,
                untilHour: param.until.replace('%20', ' '),
                fromHour: param.from.replace('%20', ' ')
              }
            }));
          }
        })
      ).subscribe();
    this.data$ = this.userService.userQuery.select(it => it.ui)
      .pipe(
        switchMap(it => {
          return this.carsService.getCars(/*it.select,
              `${it.bkdt.start.format('YYYY-MM-DD')}:${it.bkdt.end.format('YYYY-MM-DD')}`,
              it.city*/);
        })
      );
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }


}
