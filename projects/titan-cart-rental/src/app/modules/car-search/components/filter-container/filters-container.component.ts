import { Component, OnInit } from '@angular/core';
import {FiltersService} from '../../../../core/state/filters/filters.service';
import {Observable} from 'rxjs';
import {Filter} from '../../../../core/state/filters/filter.model';

@Component({
  selector: 'titan-filers-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit {

  filters$: Observable<Filter[]> = this.filtersService.filtersQuery.selectAll();
  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.filtersService.get()
      .subscribe();
  }


}
