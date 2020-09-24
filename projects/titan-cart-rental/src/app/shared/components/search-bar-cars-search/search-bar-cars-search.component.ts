import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {concatMap, map, scan, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {AddonsService} from '../../../core/state/addons/addons.service';
import {Addon} from '../../../core/state/addons/addon.model';

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
  actives$: Observable<Addon[]>;
  sumTotalAddons$: Observable<number>;

  constructor(private userService: UserService,
              private addonsService: AddonsService) {
  }


  ngOnInit(): void {
    this.actives$ = this.addonsService.addonsQuery.selectActive();
    this.sumTotalAddons$ = this.actives$
    .pipe(
      map((it) => it.map(num => Number(num.isale)).reduce((curr, acc ) => curr + acc ))
    );

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
