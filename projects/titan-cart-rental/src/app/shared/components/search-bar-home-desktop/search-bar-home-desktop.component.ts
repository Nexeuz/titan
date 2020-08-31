import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'titan-search-bar-home-desktop',
  templateUrl: './search-bar-home-desktop.component.html',
  styleUrls: ['./search-bar-home-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarHomeDesktopComponent implements OnInit {
  filteredControlOptions$: Observable<string[]>;
  rangeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
