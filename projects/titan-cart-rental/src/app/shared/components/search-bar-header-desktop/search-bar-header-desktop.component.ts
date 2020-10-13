import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../core/state/user/user.service';
import {tap} from 'rxjs/operators';
import * as moment from 'moment';
import {City} from '../../../core/state/cars/cities/city.model';

@Component({
  selector: 'titan-search-bar-header-desktop',
  templateUrl: './search-bar-header-desktop.component.html',
  styleUrls: ['./search-bar-header-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarHeaderDesktopComponent implements OnInit {

  @Input() filteredControlOptions$: Observable<City[]>;
  @Input() rangeForm: FormGroup;
  @Input() fromHours: Array<any>;
  @Input() untilHour: Array<any>;

  tomorrow = moment();

  constructor(private userService: UserService) {
  }

  setFormValue(): void {
    this.userService.userQuery.select(it => it)
      .pipe(
        tap(it => {
          if (it.ui) {
            this.rangeForm.patchValue({
              where: it.ui.city,
              formHour: it.ui.fromHour,
             // range: it.ui.bkdt,
              untilHour: it.ui.untilHour
            });
          }
        })
      ).subscribe();
  }


  ngOnInit(): void {
    this.setFormValue();
  }


}
