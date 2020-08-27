import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'titan-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  rangeForm: FormGroup;
  options: string[];
  filteredControlOptions$: Observable<string[]>;
  value: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {

    this.options = ['Option 1', 'Option 2', 'Option 3'];
    this.filteredControlOptions$ = of(this.options);

    this.filteredControlOptions$ = this.rangeForm.get('where').valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
  }

  createForm(): void {
    this.rangeForm = this.fb.group(
      {
        where: ['', [Validators.required]],
        formHour: ['',  [Validators.required]],
        range: ['', [Validators.required]],
        untilHour: ['', [Validators.required]]
      }
    );
  }




  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

}
