import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {tap} from 'rxjs/operators';
import * as moment from 'moment';
@Component({
  selector: 'titan-search-bar-cars-search',
  templateUrl: './search-bar-cars-search.component.html',
  styleUrls: ['./search-bar-cars-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarCarsSearchComponent implements OnInit {
  @Input() filteredControlOptions$: Observable<string[]>;
  @Input() rangeForm: FormGroup;
  @Input() fromHours: Array<any>;
  @Input() untilHour: Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userQuery.select(it => it.ui)
      .pipe(
        tap(it => {
          this.rangeForm.patchValue({
            where: it.city,
            formHour: it.fromHour,
            untilHour: it.untilHour,
            range: {
              start: moment(it.bkdt.start),
              end: moment(it.bkdt.end)
            }
          });
        })
      ).subscribe();
  }



}
