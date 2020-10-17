import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {tap} from 'rxjs/operators';
import * as moment from 'moment';
import {City} from '../../../core/state/cities/city.model';


@Component({
  selector: 'titan-search-bar-cars-search',
  templateUrl: './search-bar-cars-search.component.html',
  styleUrls: ['./search-bar-cars-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarCarsSearchComponent implements OnInit, AfterViewInit {
  @Input() filteredControlOptions$: Observable<City[]>;
  @Input() rangeForm: FormGroup;
  @Input() fromHours: Array<any>;
  @Input() untilHour: Array<any>;

  tomorrow = moment().add(1, 'day');

  constructor(private userService: UserService) {
  }


  ngOnInit(): void {

    this.userService.userQuery.select(it => it.ui)
      .pipe(
        tap(it => {
          this.rangeForm.patchValue({
            where: it.city,
            formHour: it.fromHour,
            untilHour: it.untilHour,
            rangeStart: moment(it.bkdt.start, 'DD-MM-YYYY'),
            rangeEnd: moment(it.bkdt.end, 'DD-MM-YYYY')
          });
        })
      ).subscribe();
  }

  ngAfterViewInit(): void {
  }


}
