import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'titan-search-bar-header-desktop',
  templateUrl: './search-bar-header-desktop.component.html',
  styleUrls: ['./search-bar-header-desktop.component.scss']
})
export class SearchBarHeaderDesktopComponent implements OnInit {

  filteredControlOptions$: Observable<string[]>;
  rangeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }



}
