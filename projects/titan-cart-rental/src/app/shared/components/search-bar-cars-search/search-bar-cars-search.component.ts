import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }



}
