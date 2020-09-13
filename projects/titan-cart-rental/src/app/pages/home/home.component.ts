import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'titan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cd.markForCheck();
  }

}
