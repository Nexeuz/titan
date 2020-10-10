import {Component, Input, OnInit} from '@angular/core';
import {Filter} from '../../../../core/state/filters/filter.model';

@Component({
  selector: 'titan-filters-select-one',
  templateUrl: './filters-select-one.component.html',
  styleUrls: ['./filters-select-one.component.scss']
})
export class FiltersSelectOneComponent implements OnInit {
  @Input() filter: Filter;

  constructor() { }

  ngOnInit(): void {
  }

  closeAndSend() {

  }
}
