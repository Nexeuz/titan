import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'titan-search-bar-home-desktop',
  templateUrl: './search-bar-home-desktop.component.html',
  styleUrls: ['./search-bar-home-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarHomeDesktopComponent implements OnInit {
   @Input() filteredControlOptions$: Observable<string[]>;
   @Input() rangeForm: FormGroup;
   @Input() fromHours: Array<any>;
   @Input() untilHour: Array<any>;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
